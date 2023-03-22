function Clock() {
  return (
    <h1 className="heading">
      <span>{new Date().toLocaleTimeString("bn-BD")}</span>
    </h1>
  );
}

export default Clock;
