import {createElement, ReactElement, CSSProperties } from 'react';
import {WebIcon} from "mendix";
import classNames from "classnames";

export interface IconInternalProps {
  icon: WebIcon | null;
  className?: string;
  fallback?: ReactElement;
  style?: CSSProperties;
}

// Mendix internal script for handeling the rendering of WebIcon variants
export const IconInternal = ({ icon, className = "", fallback, style }: IconInternalProps): ReactElement | null => {
  if (icon?.type === "glyph") {
    return <span style={style} className={classNames("glyphicon", className, icon.iconClass)} aria-hidden />;
  }
  if (icon?.type === "image") {
    return <img style={style} className={className} src={icon.iconUrl} aria-hidden alt="" />;
  }
  if (icon?.type === "icon") {
    return <span style={style} className={classNames(className, icon.iconClass)} aria-hidden />;
  }
  return fallback || null;
};

IconInternal.displayName = "IconInternal";

export interface JourneyTrackProps {
    maxValue: number;
    previousValue?: number;
    currentValue: number;
    currentGoalIcon: WebIcon;
    targetValue?: number;
    benchmarkValue?: number;
    className?: string;
}

// Functional component for the ProgressTracker
export function JourneyTrack ({
    maxValue,
    previousValue,
    currentValue,
    currentGoalIcon,
    targetValue,
    benchmarkValue,
    className,
  }: JourneyTrackProps): ReactElement {

    // Calculate widths for progress bars
    const previousWidth = ((previousValue ?? 0) / maxValue ?? 0) * 100;
    const currentWidth = (currentValue / maxValue) * 100;
  
    // Determine classes and order for progress bars based on comparison
    const isCurrentValueGreater = previousValue !== undefined && previousValue < currentValue;
    const previousBarClass = isCurrentValueGreater ? 'lighter-progress-color' : 'darker-progress-color';
    const currentBarClass = isCurrentValueGreater ? 'darker-progress-color' : 'lighter-progress-color';
    
    // Determine if current goal has been reached and set color class accordingly
    const isGoalReached = targetValue !== undefined && currentValue >= targetValue;
    const currentGoalReached = isGoalReached ? 'current-goal-reached' :'';

    // Set the image position at the end of the current progress bar
    const currentMarker = currentWidth;
  
    return (
        <div
          id="journeytracker-container"
          className={className && className}
        >

        {/* Previous progress bar */}
        <div id="bar-container">
          <div
            id="previous-progress"
            className = {`journey-progress-bar ${previousBarClass}`}
            style={{ width: `${previousWidth}%`}}
          ></div>
          
          {/* Current progress bar */}
          <div
            id="current-progress"
            className = {`journey-progress-bar ${currentBarClass}`}
            style={{ width: `${currentWidth}%`}}
          ></div>
        </div>

        {/* Marker for the current position */}
        <div id="current-progress-marker" style={{ left: `calc(${currentMarker}% - 10px)` }}></div>
  
        {/* Marker for the current goal */}
        {targetValue !== undefined && targetValue > 0 && (
            <IconInternal
              icon={currentGoalIcon}
              className={`current-goal-marker ${currentGoalReached}`}
              style={{ left: `calc(${(targetValue / maxValue) * 100}% - 10px)`}}
              fallback={<div />}
            />
        )}
  
        {/* Optional: Benchmark goal marker */}
        {benchmarkValue !== undefined && benchmarkValue > 0 && (
          <div
            id="benchmark-marker"
            style={{ left: `${(benchmarkValue / maxValue) * 100}%` }}
          ></div>
        )}
      </div>
    );
  };
