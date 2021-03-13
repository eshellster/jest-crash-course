const audio = require("./audio");
const video = require("./video");

test("plays video", () => {
  const spy = jest.spyOn(video, "play", "get");
  const isPlaying = video.play;

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);

  spy.mockRestore();
});

test("play audio", () => {
  const spy = jest.spyOn(audio, "volume", "set");
  audio.volume = 100;

  expect(spy).toHaveBeenCalled();
  expect(audio.volume).toBe(100);

  spy.mockRestore();
});
