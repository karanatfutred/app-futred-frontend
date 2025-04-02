import { cn } from "@/lib/utils";

interface Sprint {
  id: string;
  title: string;
  status: string;
  startDate: string;
  endDate: string;
  progress: number;
}

export function GanttChart({ sprints }) {
  // Sample dates for visualizing the Gantt chart
  const totalDays = 42; // 6 weeks
  const startDate = new Date("2025-05-01");
  const dateLabels = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i * 7);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  // Calculate positions for the sprints (simplified for example)
  const sprintsWithPosition = sprints.map((sprint, index) => {
    // Each sprint is 2 weeks (14 days) for this example
    const startDay = index * 14;
    const duration = 14;

    return {
      ...sprint,
      startPosition: (startDay / totalDays) * 100,
      width: (duration / totalDays) * 100,
    };
  });

  return (
    <div className="space-y-4">
      {/* Timeline header */}
      <div className="grid grid-cols-6 gap-0">
        {dateLabels.map((label, i) => (
          <div key={i} className="text-xs text-center text-muted-foreground">
            {label}
          </div>
        ))}
      </div>

      {/* Timeline grid */}
      <div className="h-8 relative border-t border-b grid grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-r">
            {i === 0 && (
              <div className="absolute left-0 top-0 h-full border-l" />
            )}
          </div>
        ))}

        {/* Today marker */}
        <div
          className="absolute top-0 h-full w-0.5 bg-red-500 z-10"
          style={{ left: "15%" }}
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-red-500 whitespace-nowrap">
            Today
          </div>
        </div>

        {/* Sprint bars */}
        {sprintsWithPosition.map((sprint) => (
          <div
            key={sprint.id}
            className="absolute h-6 top-1 rounded"
            style={{
              left: `${sprint.startPosition}%`,
              width: `${sprint.width}%`,
            }}
          >
            <div
              className={cn(
                "h-full rounded cursor-pointer flex items-center px-2",
                sprint.status === "In Progress"
                  ? "bg-green-200 border border-green-400"
                  : sprint.status === "Completed"
                  ? "bg-blue-200 border border-blue-400"
                  : "bg-gray-200 border border-gray-400"
              )}
            >
              <span className="text-xs font-medium truncate">
                {sprint.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs pt-2">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-green-200 border border-green-400"></div>
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-blue-200 border border-blue-400"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-gray-200 border border-gray-400"></div>
          <span>Not Started</span>
        </div>
      </div>
    </div>
  );
}
