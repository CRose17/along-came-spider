import k from "../src/kaboom";
import Win from "./win";
import Lose from "./lose";

k.scene("lose", Lose);
k.scene("win", Win);

k.loadRoot("https://i.imgur.com/");
k.loadSprite("spider", "aTxTD53.png");
k.loadSprite("fly", "7FtRXwP.png");
k.loadSprite("bolt", "0PndioM.png");
k.loadSprite("web", "6iE2HD3.png?1");
k.loadSprite("wall", "7JzKe7Xs.png");
k.loadSprite("ground", "8hfkcDUs.png");

const block_size = 20;
const MOVE_SPEED = 200;
const WEB_SPEED = 300;
const FLY1_SPEED = 50;
const FLY2_SPEED = 170;
const FLY3_SPEED = 100;
const TIME_LEFT = 20;

k.layers(["bg", "obj", "ui"], "obj");

export default function Game() {
  k.addLevel(
    [
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =         b                        =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                            f     =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     =                                  =",
      "     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ],
    {
      width: block_size,
      height: block_size,
      pos: (0, 0),
      "=": [k.sprite("wall")],
      x: [k.sprite("ground")],
      b: [k.sprite("bolt")],
      f: [k.sprite("fly")]
    }
  );

  const score = k.add([
    k.text("0"),
    k.pos(50, 300),
    k.layer("ui"),
    k.scale(2.5),
    {
      value: 0
    }
  ]);

  const timer = k.add([
    k.text("0"),
    k.pos(50, 350),
    k.scale(2),
    k.layer("ui"),
    {
      time: TIME_LEFT
    }
  ]);

  /*   timer.action(() => {
    timer.time -= k.dt();
    timer.text = timer.time.toFixed(2);
    if (timer.time <= 0) {
      go("lose", { score: score.value });
    } else if (score.value === 3) {
      go("win", { score: score.value });
    }
  }); */

  const spider = k.add([k.sprite("spider"), k.pos(300, 0)]);

  k.keyDown("right", () => {
    spider.move(MOVE_SPEED, 0);
  });
  k.keyDown("left", () => {
    spider.move(-MOVE_SPEED, 0);
  });

  function spawnWeb(p) {
    k.add([k.sprite("web"), k.pos(p), k.origin("center"), "webHit"]);
  }

  k.keyPress("space", () => {
    spawnWeb(spider.pos.add(0, 40));
  });

  k.action("webHit", (b) => {
    b.move(0, WEB_SPEED);
    if (b.pos === "ground") {
      k.destroy(b);
    }
  });
}
