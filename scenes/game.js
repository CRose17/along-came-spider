import k from "../src/kaboom";
import Win from "./win";
import Lose from "./lose";

k.scene("lose", Lose);
k.scene("win", Win);

k.loadRoot("../sprites/");
k.loadSprite("spider", "spider.png");
k.loadSprite("fly", "fly.png");
k.loadSprite("bolt", "bolt.png");

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
      "     =                s                 =",
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
      "=": [k.rect(block_size, block_size), k.color(255, 0, 0), "wall"],
      x: [k.rect(block_size, block_size), k.color(0, 0, 0), "ground"],
      s: [k.sprite("spider"), solid()]
    }
  );
}
