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
            currentOnTop: Boolean(props.currentOnTop),
            startIcon: (props.startIcon?.value),
            endIcon: (props.endIcon?.value),
            iconsAlongSide: Boolean(props.iconsAlongSide),
            className: (props.class),
            markerList: (props.markerList)
        };
    }

    const { maxValue, previousValue, currentValue, currentOnTop, startIcon, endIcon, iconsAlongSide, className, markerList } = getCurrentValues();

    return (
        <JourneyTrackComponent
            maxValue = {maxValue}
            previousValue = {previousValue}
            currentValue = {currentValue}
            currentOnTop = {currentOnTop}
            startIcon = {startIcon}
            endIcon = {endIcon}
            iconsAlongSide = {iconsAlongSide}
            className = {className}
            markerList = {markerList}
        />
    );
};