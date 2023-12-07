import { ReactElement, createElement } from "react";
import { JourneyTrackerPreviewProps } from "../typings/JourneyTrackerProps";
import { JourneyTrack } from "./components/JourneyTrack";

export function preview (props: JourneyTrackerPreviewProps):ReactElement {
    return <JourneyTrack
        maxValue = {Number(props.maxScore ?? 5)}
        previousValue = {Number(props.previousScore ?? 1)}
        currentValue={Number(props.currentGoal ?? 2)} 
        currentGoalIcon={props.goalIcon} 
        targetValue={Number(props.currentScore ?? 3)}   
        benchmarkValue={Number(props.benchmarkGoal ?? 4)}   
    />
}

export function getPreviewCss(): string {
    return require("./ui/JourneyTracker.scss");
}