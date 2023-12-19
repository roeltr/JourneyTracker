/**
 * This file was generated from JourneyTracker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue, WebIcon } from "mendix";
import { Big } from "big.js";

export interface MarkerListType {
    markerName: EditableValue<string>;
    showMarkerName: boolean;
    reachedHighlight: boolean;
    markerIcon?: DynamicValue<WebIcon>;
    addMarkerLine: boolean;
    markerAbove: boolean;
    markerValue: EditableValue<Big>;
}

export interface MarkerListPreviewType {
    markerName: string;
    showMarkerName: boolean;
    reachedHighlight: boolean;
    markerIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    addMarkerLine: boolean;
    markerAbove: boolean;
    markerValue: string;
}

export interface JourneyTrackerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    maxScore: number;
    currentScore: EditableValue<Big>;
    previousScore?: EditableValue<Big>;
    currentOnTop: boolean;
    startIcon?: DynamicValue<WebIcon>;
    endIcon?: DynamicValue<WebIcon>;
    iconsAlongSide: boolean;
    markerList: MarkerListType[];
}

export interface JourneyTrackerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    maxScore: number | null;
    currentScore: string;
    previousScore: string;
    currentOnTop: boolean;
    startIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    endIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    iconsAlongSide: boolean;
    markerList: MarkerListPreviewType[];
}
