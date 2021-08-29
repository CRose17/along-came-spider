import k from "../src/kaboom";
import Win from "./win";
import Lose from "./lose";

k.scene("lose", Lose);
k.scene("win", Win);

const MOVE_SPEED = 200;
const WEB_SPEED = 300;
const FLY1_SPEED = 50;
const FLY2_SPEED = 170;
const FLY3_SPEED = 100;
const TIME_LEFT = 20;

k.layers(["bg", "obj", "ui"], "obj");

export default function Game() {
  k.add([
    k.text("Game goes here", 32),
    k.pos(k.width() / 2, k.height() / 2),
    k.color(1, 1, 1, 1),
    k.origin("top")
  ]);
}

//const spider = k.add([k.sprite("spider"), k.scale(2), k.pos(20, 0)]);
