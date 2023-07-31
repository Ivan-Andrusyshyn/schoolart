export const MapLocal = () => {
  const windowWidth = window.innerWidth;

  let width = "330px";
  let height = "280px";

  if (windowWidth > 768) {
    width = "470px";
    height = "400px";
  }
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.81908415492774!2d24.55140479671522!3d48.445924574245716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737243b8a7cca35%3A0x2e96a855145ea51d!2z0LLRg9C70LjRhtGPINCh0LLQvtCx0L7QtNC4LCAyNzLQkCwg0K_RgNC10LzRh9C1LCDQhtCy0LDQvdC-LdCk0YDQsNC90LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc4NTAw!5e0!3m2!1suk!2sua!4v1690799017247!5m2!1suk!2sua"
      style={{ width: width, height: height }}
    ></iframe>
  );
};
