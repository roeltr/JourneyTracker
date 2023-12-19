import { createElement, ReactElement, CSSProperties } from "react";
import { WebIcon } from "mendix";
import classNames from "classnames";
import { MarkerListType } from "../../typings/JourneyTrackerProps";

export interface IconInternalProps {
    key: number;
    icon: WebIcon | null;
    className?: string;
    fallback?: ReactElement;
    style?: CSSProperties;
}

// Mendix internal script for handeling the rendering of WebIcon variants with additional line option
export const IconInternal = ({
    key,
    icon,
    className = "",
    style,
    fallback
}: IconInternalProps): ReactElement | null => {
    const commonProps = { key, style };

    if (icon?.type === "glyph") {
        return <span {...commonProps} className={classNames("glyphicon", icon.iconClass, className)} aria-hidden />;
    }

    if (icon?.type === "image") {
        return <img {...commonProps} src={icon.iconUrl} className={className} aria-hidden alt="" />;
    }

    if (icon?.type === "icon") {
        return <span {...commonProps} className={classNames(className, icon.iconClass)} aria-hidden />;
    }

    return fallback || null;
};

IconInternal.displayName = "IconInternal";

export function convertMarker(marker: MarkerListType) {
    const { markerName, showMarkerName, markerIcon, markerValue, markerAbove, addMarkerLine } = marker;
    return {
        markerName: markerName?.value || "",
        showMarkerName: Boolean(showMarkerName),
        markerIcon: markerIcon?.value,
        markerValue: Number(markerValue?.value) || 0,
        markerAbove: Boolean(markerAbove),
        addMarkerLine: Boolean(addMarkerLine)
    } as {
        markerName: string;
        showMarkerName: boolean;
        markerIcon: WebIcon;
        markerValue: number;
        markerAbove: boolean;
        addMarkerLine: boolean;
    };
}

export interface JourneyTrackProps {
    maxValue: number;
    previousValue?: number;
    currentValue: number;
    currentOnTop: boolean;
    startIcon: WebIcon;
    endIcon: WebIcon;
    iconsAlongSide: boolean;
    className?: string;
    markerList?: MarkerListType[];
}

// Functional component for the ProgressTracker
export function JourneyTrack({
    maxValue,
    previousValue = 0,
    currentValue,
    currentOnTop,
    endIcon,
    startIcon,
    iconsAlongSide,
    className,
    markerList
}: JourneyTrackProps): ReactElement {
    // Calculate widths for progress bars
    const previousWidth = (previousValue / maxValue) * 100;
    const currentWidth = (currentValue / maxValue) * 100;

    // Determine color and z-index order of progress bars
    const isCurrentValueGreater = previousValue < currentValue;
    const currentBarClass = currentOnTop
        ? "darker-progress-color on-top"
        : isCurrentValueGreater
        ? "darker-progress-color"
        : "lighter-progress-color";
    const previousBarClass = currentOnTop
        ? "lighter-progress-color"
        : isCurrentValueGreater
        ? "lighter-progress-color"
        : "darker-progress-color";

    // Determine if bar icons should be on top of bar or alongside
    const alongSideOrOntop =
        endIcon === undefined && startIcon === undefined ? "" : iconsAlongSide ? "alongside" : "on-top";

    // Convert markerList values using the convertMarker function
    const convertedMarkerList = markerList?.map(convertMarker);

    return (
        <div id="journeytracker" className={`${className} ${alongSideOrOntop}`}>
            {/* Icon at start of bar */}
            {startIcon !== undefined && (
                <IconInternal
                    key={0}
                    icon={startIcon}
                    className={`start-icon ${alongSideOrOntop}`}
                    style={undefined}
                    fallback={<div />}
                />
            )}

            <div id="content-container" className={`${alongSideOrOntop}`}>
                {/* Previous progress bar */}
                <div id="bar-container">
                    <div
                        id="previous-progress"
                        className={`journey-progress-bar ${previousBarClass}`}
                        style={{ width: `${previousWidth}%` }}
                    ></div>

                    {/* Current progress bar */}
                    <div
                        id="current-progress"
                        className={`journey-progress-bar ${currentBarClass}`}
                        style={{ width: `${currentWidth}%` }}
                    ></div>
                </div>

                {/* Markers */}
                {convertedMarkerList?.map((marker, index) => {
                    const markerContainerClasses = classNames(
                        `marker-container-${index}`,
                        { above: marker.markerAbove },
                        { "show-line": marker.addMarkerLine || marker.markerIcon === undefined }, // Add "show-line" if markerIcon is undefined
                        { reached: currentValue >= marker.markerValue }
                    );

                    const markerContainerStyle = {
                        left: `calc(${(marker.markerValue / maxValue) * 100}%)`
                    };

                    return (
                        <div className={markerContainerClasses} style={markerContainerStyle} key={index}>
                            {marker.markerValue !== undefined && (
                                <IconInternal
                                    key={index}
                                    icon={marker.markerIcon}
                                    className={`marker marker-${marker.markerValue}`}
                                    style={undefined}
                                    fallback={<div />}
                                />
                            )}
                            {marker.showMarkerName && <span key={`name-${index}`}>{marker.markerName}</span>}
                        </div>
                    );
                })}
            </div>

            {/* Icon at end of bar */}
            {endIcon !== undefined && (
                <IconInternal
                    key={maxValue}
                    icon={endIcon}
                    className={`end-icon ${iconsAlongSide ? "alongside" : "on-top"}`}
                    style={undefined}
                    fallback={<div />}
                />
            )}
        </div>
    );
}
