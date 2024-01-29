import { WebIcon } from "mendix";
import { MarkerListType } from "../../typings/JourneyTrackerProps";

export interface ConvertedMarker {
    markerName: string;
    showMarkerName: boolean;
    markerIcon: WebIcon;
    markerValue: number;
    markerAbove: boolean;
    addMarkerLine: boolean;
    reachedHighlight: boolean;
}

export function convertMarker(marker: MarkerListType): ConvertedMarker {
    const { markerName, showMarkerName, reachedHighlight, markerIcon, markerValue, markerAbove, addMarkerLine } = marker;
    return {
        markerName: markerName?.value || "",
        showMarkerName: Boolean(showMarkerName),
        reachedHighlight: Boolean(reachedHighlight),
        markerIcon: markerIcon?.value,
        markerValue: Number(markerValue?.value) || 0,
        markerAbove: Boolean(markerAbove),
        addMarkerLine: Boolean(addMarkerLine)
    };
}