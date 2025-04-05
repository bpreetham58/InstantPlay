export function formatHour(hour) {
    const h = parseInt(hour);
    return h > 12 ? `${h - 12} PM` : `${h} AM`;
  }
  