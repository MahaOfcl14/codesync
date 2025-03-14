import { CallRecording } from '@stream-io/video-react-sdk'
import React from 'react'
import toast from 'react-hot-toast';
import { format } from 'date-fns';

function RecordingCard({ recording }: { recording: CallRecording }) {
    const handleCopyLink = async () => {
        try {
          await navigator.clipboard.writeText(recording.url);
          toast.success("Recording link copied to clipboard");
        } catch (error) {
          toast.error("Failed to copy link to clipboard");
        }
      };

      const formattedStartTime = recording.start_time
      ? format(new Date(recording.start_time), "MMM d, yyyy, hh:mm a")
      : "Unknown";

      const duration =
      recording.start_time && recording.end_time
        ? calculateRecordingDuration(recording.start_time, recording.end_time)
        : "Unknown duration";
    
    return (
    <div>RecordingCard</div>
  )
}

export default RecordingCard