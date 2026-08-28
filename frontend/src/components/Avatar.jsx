export default function Avatar({ initials, color, size = 44, online, ring }) {
  return (
    <div
      className={`avatar${ring ? ' avatar--ring' : ''}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.38,
        background: `linear-gradient(135deg, ${color}, ${color}99)`,
      }}
    >
      <span>{initials}</span>
      {online && <span className="avatar__dot" />}
    </div>
  );
}