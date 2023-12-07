import { createElement,FunctionComponent } from "react"; 
import { JourneyTrackerContainerProps } from "../typings/JourneyTrackerProps";
import { JourneyTrack as JourneyTrackComponent, JourneyTrackProps} from "./components/JourneyTrack";
import "./ui/JourneyTracker.scss";


export const JourneyTracker: FunctionComponent <JourneyTrackerContainerProps> = props => {
    function getCurrentValues(): JourneyTrackProps {
        return {
            maxValue: (props.maxScore),
            previousValue: Number(props.previousScore?.value),
            currentValue: Number(props.currentScore.value),
            currentGoalIcon: (props.goalIcon.value),
            targetValue: Number(props.currentGoal?.value),
            benchmarkValue: Number(props.benchmarkGoal?.value),
            className: (props.class)
        };
    }

    const { maxValue, previousValue, currentValue, currentGoalIcon, targetValue, benchmarkValue, className } = getCurrentValues();

    return (
        <JourneyTrackComponent
            maxValue = {maxValue}
            previousValue = {previousValue}
            currentValue={currentValue}   
            currentGoalIcon={currentGoalIcon}
            targetValue={targetValue} 
            benchmarkValue={benchmarkValue}
            className={className}
        />
    );
};