function StatsSection() {
  const stats = [
    { value: "4+", label: "Major Projects" },
    { value: "15+", label: "Technologies" },
    { value: "1+", label: "Years Experience" },
    { value: "100%", label: "Learning Mindset" },
  ];

  return (
    <section>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {stats.map((stat, index) => (
          <div key={index}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;