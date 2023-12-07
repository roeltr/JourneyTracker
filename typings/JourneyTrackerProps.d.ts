/**
 * This file was generated from JourneyTracker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue, WebIcon } from "mendix";
import { Big } from "big.js";

export interface JourneyTrackerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    maxScore: number;
    currentScore: EditableValue<Big>;
    previousScore?: EditableValue<Big>;
    currentGoal: EditableValue<Big>;
    goalIcon: DynamicValue<WebIcon>;
    benchmarkGoal?: EditableValue<Big>;
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
    currentGoal: string;
    goalIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    benchmarkGoal: string;
}
