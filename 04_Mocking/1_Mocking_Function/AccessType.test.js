const audio = require("./audio");
const video = require("./video");

test("play video", () => {
  const spy = jest.spyOn(video, "play", "get");
  const isPlaying = video.play;

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});
