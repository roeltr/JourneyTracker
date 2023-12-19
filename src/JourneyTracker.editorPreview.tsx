import { ReactElement, createElement } from "react";
import { JourneyTrackerPreviewProps } from "../typings/JourneyTrackerProps";
import { JourneyTrack } from "./components/JourneyTrack";

export function preview(props: JourneyTrackerPreviewProps): ReactElement {
    return (
        <JourneyTrack
            maxValue={Number(props.maxScore ?? 5)}
            previousValue={Number(props.previousScore ?? 1)}
            currentValue={Number(props.currentScore ?? 2)}
            currentOnTop={Boolean(props.currentOnTop ?? false)}
            startIcon={undefined}
            endIcon={undefined}
            iconsAlongSide={Boolean(props.iconsAlongSide ?? false)}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/JourneyTracker.scss");
}
