const end = 355;
const issues = [
  {
    stateID: 0,
    logText: "我出生了",
    nextStates: [
      { possibility: 0.2, stateID: 1 },
      { possibility: 0.4, stateID: 99 },
      { possibility: 2.0, stateID: 100 },
    ],
  },
  {
    stateID: 1,
    logText: "我夭折了",
    nextStates: [{ possibility: 2.0, stateID: 7 }],
  },
  {
    stateID: 2,
    logText: "我花光了所有的钱，饥饿向我伸出了魔爪，我饿死了。达成结局：告罄",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 3,
    logText:
      "我突然觉得人生的底色是黑暗的。欢愉，学习，工作，这些到头来又有什么意义呢？",
    nextStates: [{ possibility: 2.0, stateID: 4 }],
  },
  {
    stateID: 4,
    logText: "人在种种诱惑或欲望中行止不定，可是却无法面对那终极的追问",
    nextStates: [{ possibility: 2.0, stateID: 5 }],
    move: 1,
  },
  {
    stateID: 5,
    logText: "我在迷惘中沉沦。",
    nextStates: [{ possibility: 2.0, stateID: 6 }],
    observe: 1,
  },
  {
    stateID: 6,
    logText: "达成结局：黑暗",
    nextStates: [{ possibility: 2.0, stateID: end }],
    move: 1,
    desire: 1,
  },
  {
    stateID: 7,
    logText: "达成结局：不幸",
    nextStates: [{ possibility: 2.0, stateID: end }],
    move: 2,
  },
  {
    stateID: 8,
    logText: "听说有一个东西叫物理，好像很好玩",
    nextStates: [{ possibility: 2.0, stateID: 19 }],
    defend: 2,
  },

  {
    stateID: 9,
    logText: "作业真简单，写完作业就可以弹钢琴了",
    nextStates: [{ possibility: 2.0, stateID: 19 }],
    observe: 2,
  },
  {
    stateID: 10,
    logText: "我上初中了",
    nextStates: [{ possibility: 1.0, stateID: 11 }],
  },
  {
    stateID: 11,
    logText: "初中的作业比小学还多！一点都不想写，学这些有什么用嘛！",
    nextStates: [
      { possibility: 0.6, stateID: 12 },
      { possibility: 2.0, stateID: 13 },
    ],
  },
  {
    stateID: 12,
    logText: "我没有考上高中，只好出去打工",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 13,
    logText: "我上高中了。这个高中似乎很差",
    nextStates: [{ possibility: 2.0, stateID: 14 }],
  },
  {
    stateID: 14,
    logText: "我还是像以前一样，成绩不咋地。",
    nextStates: [{ possibility: 2.0, stateID: 15 }],
  },
  {
    stateID: 15,
    logText:
      "要高考了，我很紧张，能考上大学吗？可是考上了又有什么好处呢？还不是要学习？",
    nextStates: [
      { possibility: 0.6, stateID: 16 },
      { possibility: 2.0, stateID: 17 },
    ],
  },
  {
    stateID: 16,
    logText: "我没有考上大学，只好出去打工",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 17,
    logText: "我考上了大专",
    nextStates: [{ possibility: 2.0, stateID: 18 }],
  },
  {
    stateID: 18,
    logText: "我毕业了",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 19,
    logText: "我上初中了",
    nextStates: [{ possibility: 2.0, stateID: 20 }],
  },
  {
    stateID: 20,
    logText:
      "初中开始，作业变多了。我不再花时间在自己的兴趣上。或许，我也没什么真正的兴趣吧",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 21,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 0.3, stateID: 0 }],
  },
  {
    stateID: 22,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 23,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 24,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 25,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 26,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 27,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 28,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 29,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 30,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 31,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 32,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 33,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 34,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 35,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 36,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 37,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 38,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 39,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 40,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 41,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 42,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 43,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 44,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 45,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 46,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 47,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 48,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 49,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 50,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 51,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 52,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 53,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 54,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 55,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 56,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 57,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 58,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 59,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 60,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 61,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 62,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 63,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 64,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 65,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 66,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 67,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 68,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 69,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 70,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 71,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 72,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 73,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 74,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 75,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 76,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 77,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 78,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 79,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 80,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 81,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 82,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 83,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 84,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 85,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 86,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 87,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 88,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 89,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 90,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 91,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 92,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 93,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 94,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 95,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 96,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 97,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 98,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 99,
    logText: "我对运动产生了兴趣",
    nextStates: [{ possibility: 2.0, stateID: 101 }],
    defend: 2,
    age: 10,
  },
  {
    stateID: 100,
    logText: "我对写作产生了兴趣",
    nextStates: [{ possibility: 2.0, stateID: 101 }],
    observe: 2,
    age: 10,
  },
  {
    stateID: 101,
    logText: "我考上大学了",
    nextStates: [{ possibility: 2.0, stateID: 102 }],
    age: 18,
  },
  {
    stateID: 102,
    logText: "我毕业了",
    nextStates: [{ possibility: 2.0, stateID: 150 }],
    age: 22,
  },
  {
    stateID: 103,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 104,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 105,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 106,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 107,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 108,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 109,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 110,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 111,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 112,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 113,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 114,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 115,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 116,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 117,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 118,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 119,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 120,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 121,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 122,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 123,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 124,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 125,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 126,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 127,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 128,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 129,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 130,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 131,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 132,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 133,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 134,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 135,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 136,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 137,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 138,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 139,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 140,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 141,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 142,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 143,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 144,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 145,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 146,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 147,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 148,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 149,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 150,
    logText: "我当以何谋生？",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 151,
    logText: "我成为了作家",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 152,
    logText: "我成为了运动员",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 153,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 154,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 155,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 156,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 157,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 158,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 159,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 160,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 161,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 162,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 163,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 164,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 165,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 166,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 167,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 168,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 169,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 170,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 171,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 172,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 173,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 174,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 175,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 176,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 177,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 178,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 179,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 180,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 181,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 182,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 183,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 184,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 185,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 186,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 187,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 188,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 189,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 190,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 191,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 192,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 193,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 194,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 195,
    logText: "我的目之力量获得了增长",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    observe: 1,
    className: "Cornflowerblue",
  },
  {
    stateID: 196,
    logText: "我的心之力量获得了增长",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    defend: 1,
    className: "Tomato",
  },
  {
    stateID: 197,
    logText: "我的珠之力量获得了增长",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    technique: 1,
    className: "Lightslategray",
  },
  {
    stateID: 198,
    logText: "我的水之力量获得了增长",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    desire: 1,
    className: "Blue",
  },
  {
    stateID: 199,
    logText: "警告：似乎程序出了问题，建议不要关闭网页，并反馈给开发者",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 200,
    logText: "我闲下来了 ",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  //闲下来的操作：
  {
    stateID: 201,
    logText: "我决定外出取材",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    time: -1,
  },
  {
    stateID: 202,
    logText: "我决定出去转转",
    nextStates: [{ possibility: 2.0, stateID: 211 }],
  },
  {
    stateID: 203,
    logText: "我决定磨练我的目之力量",
    nextStates: [
      { possibility: 0.4, stateID: 195 },
      { possibility: 2.0, stateID: 204 },
    ],
  },
  {
    stateID: 204,
    logText: "日复一日，我并没有什么长进",
    nextStates: [
      { possibility: 0.1, stateID: 205 },
      { possibility: 2.0, stateID: 200 },
    ],
  },
  {
    stateID: 205,
    logText: "我不能接受。我真的不擅长观察吗？",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: 1,
  },
  {
    stateID: 206,
    logText: "我决定参加比赛",
    nextStates: [
      { possibility: 0.2, stateID: 311 }, //判断兴趣
      { possibility: 0.3, stateID: 316 }, //没获得
      { possibility: 0.4, stateID: 308 }, //一些
      { possibility: 2.0, stateID: 309 }, //很多
    ],
  },
  {
    stateID: 207,
    logText: "又过了一段日子。我坐在书桌前，开始写作",
    nextStates: [
      { possibility: 0.2, stateID: 305 }, //判断兴趣
      { possibility: 0.1, stateID: 301 }, //无思路
      { possibility: 0.3, stateID: 302 }, //一些
      { possibility: 2.0, stateID: 303 }, //很多
    ],
  },
  {
    stateID: 208,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 209,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 210,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  //探险的选择：
  {
    stateID: 211,
    logText: "我决定去城里转转",
    nextStates: [
      { possibility: 0.25, stateID: 216 },
      { possibility: 0.25, stateID: 229 },
      { possibility: 0.25, stateID: 230 },
      { possibility: 2.0, stateID: 233 },
    ],
    time: -1,
  },
  {
    stateID: 212,
    logText: "我决定去其他城市旅游 ",
    nextStates: [{ possibility: 2.0, stateID: 241 }],
    time: -1,
  },
  {
    stateID: 213,
    logText: "我决定去乡下看看",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    time: -1,
  },
  {
    stateID: 214,
    logText: "我决定去森林野营",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    time: -1,
  },
  {
    stateID: 215,
    logText: "我决定去山脉深处探险",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    time: -1,
  },
  //城里探险结果：
  {
    stateID: 216,
    logText: "我捡到了一个钱包。原地等了半个小时也不见有人过来。",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 217,
    logText: "我打开了钱包。钱包里有很多钱，好耶！",
    nextStates: [
      { possibility: 0.6, stateID: 220 },
      { possibility: 2.0, stateID: 200 },
    ],
    money: 4,
  },
  {
    stateID: 218,
    logText: "我打开了钱包。钱包里没多少钱",
    nextStates: [
      { possibility: 0.2, stateID: 220 },
      { possibility: 2.0, stateID: 200 },
    ],
    money: 1,
  },
  {
    stateID: 219,
    logText: "我将钱包交给了警察",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    reputation: 1,
  },
  {
    stateID: 220,
    logText: "一股惆怅的思绪悄然而生。这是正确的吗？我应该愧对自己的良心吗？",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: 1,
  },
  {
    stateID: 221,
    logText: "我走在小巷里，前面突然出现两个混混。他们目光锐利地盯着我",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 4,
      defend: 1,
      technique: 1,
      desire: 1,
      gain: 0.1,
      gainState: 195,
    },
  },
  {
    stateID: 222,
    logText: "我走在小巷里，前面突然出现两个体格壮硕的混混",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 4,
      technique: 1,
      desire: 1,
      gain: 0.1,
      gainState: 196,
    },
  },
  {
    stateID: 223,
    logText: "我走在小巷里，前面突然出现两个手持匕首的混混",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 4,
      desire: 1,
      gain: 0.1,
      gainState: 197,
    },
  },
  {
    stateID: 224,
    logText:
      "我走在小巷里，前面突然出现两个混混。空气中弥漫着一股奇异气味，我觉得被这气味吸引",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 1,
      desire: 4,
      gain: 0.1,
      gainState: 198,
    },
  },
  {
    stateID: 225,
    logText: "我走在小巷里，前面突然出现一群混混。他们目光锐利地盯着我",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 6,
      defend: 1,
      technique: 1,
      desire: 1,
      gain: 0.2,
      gainState: 195,
    },
  },
  {
    stateID: 226,
    logText: "我走在小巷里，前面突然出现一群体格壮硕的混混",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 6,
      technique: 1,
      desire: 1,
      gain: 0.2,
      gainState: 196,
    },
  },
  {
    stateID: 227,
    logText: "我走在小巷里，前面突然出现一群手持匕首的混混",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 6,
      desire: 1,
      gain: 0.2,
      gainState: 197,
    },
  },
  {
    stateID: 228,
    logText:
      "我走在小巷里，前面突然出现一群混混。空气中弥漫着一股奇异气味，我觉得被这气味吸引",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 1,
      desire: 6,
      gain: 0.2,
      gainState: 198,
    },
  },
  {
    stateID: 229,
    logText: "抽取敌人1级（此条若出现在文本框，请反馈给开发者）",
    hidden: true,
    nextStates: [
      { possibility: 0.125, stateID: 221 },
      { possibility: 0.125, stateID: 222 },
      { possibility: 0.125, stateID: 223 },
      { possibility: 0.125, stateID: 224 },
      { possibility: 0.125, stateID: 225 },
      { possibility: 0.125, stateID: 226 },
      { possibility: 0.125, stateID: 227 },
      { possibility: 2.0, stateID: 228 },
    ],
  },
  {
    stateID: 230,
    logText: "我不知不觉就走进了一间酒馆。干脆喝点酒好了",
    nextStates: [
      { possibility: 0.8, stateID: 231 },
      { possibility: 2.0, stateID: 232 },
    ],
  },
  {
    stateID: 231,
    logText: "白日放歌须纵酒，一杯又一杯，我的心情变得舒畅",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: -1,
  },
  {
    stateID: 232,
    logText: "举杯消愁愁更愁，人生真是没有意义啊！",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: 1,
  },
  {
    stateID: 233,
    logText: "我总是在城里转，有记者盯上了我",
    nextStates: [{ possibility: 2.0, stateID: 234 }],
  },
  {
    stateID: 234,
    logText: "“今日头条：某人连续36天在城里闲逛，合理怀疑其为某大人物私生子”",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    reputation: 1,
  },
  {
    stateID: 235,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 236,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 237,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 238,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 239,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 240,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 241,
    logText: "抽取敌人2级（此条若出现在文本框，请反馈给开发者）",
    hidden: true,
    nextStates: [
      { possibility: 0.1, stateID: 242 },
      { possibility: 0.1, stateID: 243 },
      { possibility: 0.1, stateID: 244 },
      { possibility: 0.1, stateID: 245 },
      { possibility: 0.15, stateID: 258 },
      { possibility: 2.0, stateID: 260 },
    ],
  },
  {
    stateID: 242,
    logText: "我开着车前往目的地，在路上遇到了一群不怀好意的强盗 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 6,
      defend: 1,
      technique: 1,
      desire: 3,
      gain: 0.3,
      gainState: 195,
      reputation: 1,
    },
  },
  {
    stateID: 243,
    logText: "我开着车前往目的地，在路上遇到了一群不怀好意的强盗 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 6,
      technique: 1,
      desire: 3,
      gain: 0.3,
      gainState: 196,
      reputation: 1,
    },
  },
  {
    stateID: 244,
    logText: "我开着车前往目的地，在路上遇到了一群不怀好意的强盗 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 6,
      desire: 3,
      gain: 0.3,
      gainState: 197,
      reputation: 1,
    },
  },
  {
    stateID: 245,
    logText: "我开着车前往目的地，在路上遇到了一群不怀好意的强盗 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 3,
      technique: 1,
      desire: 6,
      gain: 0.3,
      gainState: 198,
      reputation: 1,
    },
  },
  {
    stateID: 246,
    logText: "      ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 10,
      defend: 1,
      technique: 0,
      desire: 1,
      gain: 1,
      gainState: 195,
    },
  },
  {
    stateID: 247,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 10,
      technique: 0,
      desire: 1,
      gain: 1,
      gainState: 196,
    },
  },
  {
    stateID: 248,
    logText: "他抬起了话筒。我知道这一战难以避免了。",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 0,
      defend: 1,
      technique: 10,
      desire: 1,
      gain: 1,
      gainState: 197,
      enemyStateID: 260,
    },
  },
  {
    stateID: 249,
    logText: "一个奇异的鬼怪出现在梦里",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 0,
      desire: 10,
      gain: 0.4,
      gainState: 198,
    },
  },
  {
    stateID: 250,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 251,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 252,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 253,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 254,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 255,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 256,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 257,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 258,
    logText: "我住在一家旅馆。据说这里曾经闹鬼，管他呢",
    nextStates: [{ possibility: 2.0, stateID: 259 }],
  },
  {
    stateID: 259,
    logText: "夜幕降临，我缓缓入睡。梦境的浅白色却忽而变为刺目的漆黑",
    nextStates: [{ possibility: 2.0, stateID: 249 }],
  },
  {
    stateID: 260,
    logText: "我前往当地一家知名酒馆。当地有一首关于这家酒馆的儿歌：",
    nextStates: [{ possibility: 2.0, stateID: 261 }],
  },
  {
    stateID: 261,
    logText: "流浪者，歌神梦",
    nextStates: [{ possibility: 2.0, stateID: 262 }],
  },
  {
    stateID: 262,
    logText: "身已死，生异变",
    nextStates: [{ possibility: 2.0, stateID: 263 }],
  },
  {
    stateID: 263,
    logText: "嘴轻启，手轻动",
    nextStates: [{ possibility: 2.0, stateID: 264 }],
  },
  {
    stateID: 264,
    logText: "传千音，攻心魄",
    nextStates: [{ possibility: 2.0, stateID: 265 }],
  },
  {
    stateID: 265,
    logText: "这个儿歌听上去可不太适合儿童",
    nextStates: [{ possibility: 2.0, stateID: 266 }],
  },
  {
    stateID: 266,
    logText: "我到了，我推开酒馆的门",
    nextStates: [{ possibility: 2.0, stateID: 267 }],
  },
  {
    stateID: 267,
    logText:
      "所有人都一动不动，瘫倒在座位上，而在那酒吧的舞台上，却站着一个歌手",
    nextStates: [{ possibility: 2.0, stateID: 268 }],
  },
  {
    stateID: 268,
    logText: "他衣服破烂，眼神异质，双手以奇怪的姿势扭曲着。",
    nextStates: [{ possibility: 2.0, stateID: 248 }],
  },
  {
    stateID: 269,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 270,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 271,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 272,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 273,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 274,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 275,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 276,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 277,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 278,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 279,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 280,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 281,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 282,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 283,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 284,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 285,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 286,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 287,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 288,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 289,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 290,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 291,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 292,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 293,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 294,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 295,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 296,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 297,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 298,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 299,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 300,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 301,
    logText: "可恶！什么思路都没有。左脑装满了水，右脑装满了面粉，一晃全是浆糊",
    nextStates: [
      { possibility: 0.8, stateID: 304 },
      { possibility: 2.0, stateID: 200 },
    ],
  },
  {
    stateID: 302,
    logText: "我的作品卖得还行",
    nextStates: [
      { possibility: 0.05, stateID: 195 },
      { possibility: 2.0, stateID: 200 },
    ],
    money: 1,
  },
  {
    stateID: 303,
    logText: "不错，我的书获得了大卖",
    nextStates: [
      { possibility: 0.5, stateID: 195 },
      { possibility: 2.0, stateID: 200 },
    ],
    money: 2,
    reputation: 1,
  },
  {
    stateID: 304,
    logText: "没有思路太痛苦了！空虚，空洞，冰冷，无味，我的灵魂。为什么！",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: 1,
  },
  {
    stateID: 305,
    logText: "判断是否有兴趣：写作……（若出现此条请反馈给开发者）",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    hidden: true,
  },
  {
    stateID: 306,
    logText: "我没什么好的思路，不过凭着一腔热情随便写写也是可以的",
    nextStates: [{ possibility: 2.0, stateID: 302 }],
  },
  {
    stateID: 307,
    logText: "我对写作实在没啥兴趣，凑不出有用的思路",
    nextStates: [{ possibility: 2.0, stateID: 301 }],
  },
  {
    stateID: 308,
    logText: "我获得了一些奖金",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    money: 1,
  },
  {
    stateID: 309,
    logText: "我获得了很多奖金",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    money: 2,
  },
  {
    stateID: 310,
    logText: "所以参加的是业余比赛，没有奖金",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 311,
    logText: "判断是否有兴趣：运动……",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    hidden: true,
  },
  {
    stateID: 312,
    logText: "我对运动没啥兴趣",
    nextStates: [{ possibility: 2.0, stateID: 310 }],
  },
  {
    stateID: 313,
    logText: "最近状态不佳，不过以我从小的锻炼，获得奖金还是很容易的",
    nextStates: [{ possibility: 2.0, stateID: 308 }],
  },
  {
    stateID: 314,
    logText: "我决定磨练我的心之力量",
    nextStates: [
      { possibility: 0.3, stateID: 196 },
      { possibility: 2.0, stateID: 315 },
    ],
  },
  {
    stateID: 315,
    logText: "最近的训练并没有什么成效",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 316,
    logText: "我没赢得奖金",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 317,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 318,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 319,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 320,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 321,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 322,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 323,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 324,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 325,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 326,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 327,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 328,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 329,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 330,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 331,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 332,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 333,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 334,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 335,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 336,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 337,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 338,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 339,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 340,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 341,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 342,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 343,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 344,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 345,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 346,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 347,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 348,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 349,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 350,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 351,
    logText: "我正悠闲地四处转着，一个衣衫褴褛的老人出现在我的视野里。",
    nextStates: [{ possibility: 2.0, stateID: 352 }],
  },
  {
    stateID: 352,
    logText: "他来到我面前，问我是否对生活有着新的渴望",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 353,
    logText: "不必了，我的生活很充实",
    nextStates: [{ possibility: 2.0, stateID: 354 }],
  },

  {
    stateID: 354,
    logText: "达成结局：平凡即是喜乐",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 355,
    logText: "你可以点击按钮重新开启一局游戏",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 356,
    logText: "渴望？是的",
    nextStates: [{ possibility: 2.0, stateID: 357 }],
  },
  {
    stateID: 357,
    logText: "他留下一本破破烂烂的书便离开了",
    nextStates: [{ possibility: 2.0, stateID: 358 }],
  },
  {
    stateID: 358,
    logText: "我将信将疑地打开书本，发现上面记录的是一些神神秘秘的物品和生物",
    nextStates: [{ possibility: 2.0, stateID: 359 }],
  },
  {
    stateID: 359,
    logText: "原来世界上还有这些鲜为人知的秘密",
    nextStates: [{ possibility: 2.0, stateID: 360 }],
  },
  {
    stateID: 360,
    logText: "【解锁：属性界面】【解锁：磨练】",
    nextStates: [{ possibility: 2.0, stateID: 361 }],
  },
  {
    stateID: 361,
    logText: "【你可以提升自己的能力了】",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },

  {
    stateID: 362,
    logText: "我在超市排队结账时，发现自己忘带信用卡了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 363,
    logText: "我在公园里散步时，无意中帮助一个迷路的小孩找到了他的家长。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 364,
    logText: "我在地铁上听着音乐，突然发现自己上了错车。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 365,
    logText: "我在海边散步时，捡到了一个漂亮的贝壳。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 366,
    logText:
      "我在路上看到一个老太太摔倒了，赶紧上前扶起她并送她回家。还好没有被讹。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 367,
    logText: "我在咖啡馆里等朋友时，无聊之下和服务员聊了几句天。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 368,
    logText: "我在参加朋友的生日聚会时，不小心打翻了蛋糕。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 369,
    logText: "我在餐厅里用餐时，被一个服务员的优秀服务所感动。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 370,
    logText: "我在家中看电视时，突然停电了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 371,
    logText: "我在健身房锻炼时，意外认识了一个志同道合的朋友。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 372,
    logText: "我在上班途中，看到一只小狗走失了，于是赶快帮它找到了主人。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 373,
    logText: "我在图书馆里翻阅书籍时，无意中发现了一本非常好看的小说。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 374,
    logText: "我在商场购物时，因为太过兴奋而买了一堆不必要的东西。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 375,
    logText: "我受邀担任实验被试者，做实验时，由于疏忽而把试管摔破了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 376,
    logText: "我在朋友家里玩桌游时，因为太过激动而把桌子上的饮料洒了一地。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 377,
    logText: "我在地铁上看到一位老人没有座位，于是让自己的座位让给了他。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 378,
    logText: "我在学校里参加课外活动时，结识了一位志同道合的朋友。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 379,
    logText: "我在海边玩沙子时，意外发现了一个被埋在沙子里的宝藏。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 380,
    logText: "我在路上碰到了一个认识的人，但是忘记了他的名字。好尴尬。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 381,
    logText: "我在音乐会上听到了一首让自己很感动的歌曲。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 382,
    logText: "我在街上被一群手持玩具枪的小孩围攻了，最终被好心的路人救出。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 383,
    logText: "我在餐厅点了一道不太熟悉的菜品，却发现自己非常喜欢。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 384,
    logText: "我在打扫房间时，发现了一只萌萌哒的小老鼠玩具。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 385,
    logText: "我在公园里遛狗时，被别人的小狗咬了一口。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 386,
    logText: "我在游泳池里游泳时，意外遇到了一个老同学。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 387,
    logText: "我在超市里购物时，发现自己忘记带购物袋了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 388,
    logText: "我在医院看病时，等待的时间非常漫长。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 389,
    logText: "我在夜晚散步时，听到了远处传来的美妙的钢琴曲。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 390,
    logText: "我在街上走着走着，突然感觉到口渴了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 391,
    logText: "我在学校上课时，无聊之余画了一张漂亮的画。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 392,
    logText:
      "我在游乐园里体验了一些惊险的游戏项目，还认识了一位疯狂尖叫的小姐姐",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 393,
    logText: "我在电影院里看电影时，遇到了一个让自己印象深刻的场景。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 394,
    logText: "我在玩游戏时，电脑突然蓝屏了",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 395,
    logText: "我在大街上看到一位流浪汉，心生同情给他买了一份午餐。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 396,
    logText: "我在聚会上认识了一位新朋友，却忘了要他的联系方式。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 397,
    logText: "我在朋友家里吃饭时，吃得太多导致肚子不舒服。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 398,
    logText: "我在公园里散步时，听到了一位街头艺人弹唱的歌曲，他唱的真不错！",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 399,
    logText: "我在超市购物时，发现自己带的钱不够付账，尬住了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 400,
    logText: "我在参加写作比赛时，由于紧张而犯了一些低级错误。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 401,
    logText: "我在酒吧里喝的酒太多了，头晕眼花。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 402,
    logText: "我在医院陪伴朋友看病时，度过了漫长的等待时间，好无聊。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 403,
    logText: "我在社区里参加义务劳动时，因为不小心受了伤。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 404,
    logText: "我在健身房里锻炼时，被一个健身者的肌肉所震撼。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 405,
    logText: "我在海边玩水时，不小心被浪打了一身，湿漉漉地回家了",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 406,
    logText: "我在路上看到了一辆超级漂亮的跑车，忍不住拍了一张照片。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 407,
    logText: "我在打扫房间时，发现了一些旧物件，让我想起了往事。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 408,
    logText: "我在KTV里和同学一起开心地唱歌跳舞。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 409,
    logText: "我在咖啡馆里品尝了一款非常好喝的咖啡。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 410,
    logText: "我在街头巧遇了一位前辈，向他请教了一些问题。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 411,
    logText: "我在城里闲逛时发现了一座历史悠久的博物馆，以前居然没注意到！",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 412,
    logText: "我在购物中心里逛街时，被一件漂亮的衣服吸引住了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 413,
    logText: "我在家里看电影时，被一部悬疑片吓到了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 414,
    logText: "我在公交车上，无意中听到了陌生人的谈话，他们在聊炸弹，天呐！",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 415,
    logText: "我在夜晚散步时，看到了一轮明月挂在天空，真漂亮。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 416,
    logText: "我在家里看书时，无法集中注意力，需要找到有效的方法。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 417,
    logText: "我在户外跑步时，突然下起了大雨。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 418,
    logText: "我在宠物店里看到了一只可爱的小狗，让我心动不已。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 419,
    logText: "我在驾驶车辆时，发现路上有一些司机喝醉般乱开车，需要赶紧避开。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 420,
    logText: "我在运动时，不慎摔倒受伤。此时一位好心的先生扶我起来",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 421,
    logText: "我在做饭时，烧焦了一道菜，让我感到很失落。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 422,
    logText: "我在路上遇到了一个遗失的物品，想方设法找到了失主。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 423,
    logText: "我在餐厅里点了一份久负盛名的美食，却发现自己不喜欢这道菜的味道。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 424,
    logText: "我出于好奇参加了一次冲浪课程，体验非常刺激。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 425,
    logText: "我在体检中发现了一些健康问题，需要及时采取措施。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 426,
    logText: "我在看电视时，无意中看到了一则让我感动的新闻。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 427,
    logText: "我在超市里购物时，被一个小孩子的天真可爱深深吸引。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 428,
    logText: "我在餐厅吃饭，遇到了一个老朋友，让我感到意外和惊喜。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 429,
    logText: "我在健身房里锻炼时，遇到了一个非常友好的教练，他让我感到很舒适。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 430,
    logText: "我在做家务时，不小心弄脏了一件喜欢的衣服，让我感到有点失落。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 431,
    logText: "我在看电影时，发现自己跟剧情中的主角有很多共鸣。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 432,
    logText: "我在和朋友聊天时，发现自己和对方有许多共同点，这让我们更加亲近。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 433,
    logText: "我在一个第一次去的购物中心里迷路了，花了好久才找到出口。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 434,
    logText: "我在和家人一起度过一个愉快的周末，感到非常幸福。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 435,
    logText: "我在约会时，遇到了一个非常有趣的人，让我度过了一个美好的夜晚。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 436,
    logText: "我在假期中去了一个新的城市，发现了很多新奇的事物。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 437,
    logText: "我在一个戏剧表演中注意到了一位非常优秀的表演者，她让我感到震撼。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 438,
    logText: "我在野外露营时，遇到了一只狐狸，让我感到有点害怕。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 439,
    logText: "我在电影院里看到了一部很差的电影，让我感到有些失望。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 440,
    logText: "我在参加一个派对时，遇到了一个很自大的人，让我感到有些不舒服。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 441,
    logText: "我在旅行中遇到了一些交通堵塞，浪费了很多时间。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 442,
    logText: "我在逛街时，发现了一只很合适的帽子，让我感到很开心。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 443,
    logText: "我在户外运动时，不小心受伤了，需要寻求医生的帮助。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 444,
    logText: "我在网络上看到了一些令人不愉快的评论，让我感到有些失望。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 445,
    logText: "我在听一位老师的讲座时，感到自己的视野得到了开阔。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 446,
    logText: "我在和朋友一起吃饭时，感到自己的社交能力得到了锻炼。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 447,
    logText: "我在等公交时，车上人特别多，只好等下一辆。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 448,
    logText: "家里墙壁脱漆严重，不得不请装修人员来刷漆",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 449,
    logText: "我在阅读一本好书时，感到自己的阅读理解能力得到了提升。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 450,
    logText: "我在逛公园时，看到了一场美丽的日落，让我感到心旷神怡。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 451,
    logText: "我完成了一个复杂的折纸手工品，分享在社交媒体上，获得了很多点赞。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 452,
    logText: "我在学习一门外语时，发现自己的口语能力有了很大提升。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 453,
    logText: "我在一个展览馆里欣赏了一场精彩的艺术展，让我感到很有收获。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 454,
    logText: "我在旅行中遇到了一些热心的当地人，让我感到很幸福。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 455,
    logText: "我在和朋友一起玩游戏，因为技术太烂被嫌弃了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 456,
    logText: "我在参观5D展馆时，感觉自己的心灵受到了震撼。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 457,
    logText: "我在一个演讲比赛中获得了优异成绩，感到自己的演讲能力得到了提高。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 458,
    logText: "我与朋友一起举办了一次聚会，让我感到很幸福。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 459,
    logText: "我在游览一个历史遗迹时，感受到了历史的厚重和文化的传承。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 460,
    logText: "我在逛街时，买到了自己一直想要的手办，让我感到很满足。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 461,
    logText: "我在养老院做义工，看到老人的笑容，感觉自己的善良受到了回报。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 462,
    logText: "我在和朋友一起玩游戏时，感到自己的技术水平比以前提高了不少。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 463,
    logText: "我在公共场合走光了，让我感到很尴尬和不安。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 464,
    logText: "我的手机被盗了，里面的重要信息也随之丢失，让我感到很沮丧和无助。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 465,
    logText: "我的宠物突然生病去世了，让我感到很悲伤和失落。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 466,
    logText: "我在参加派对时喝醉了，发了酒疯，让我感到很尴尬和羞愧。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 467,
    logText: "我在旅行中丢了护照，让我感到很无助。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 468,
    logText:
      "我被朋友背叛了，不仅让我失去了这个朋友，还伤害了我的信任感，让我感到很痛苦和愤怒。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 469,
    logText: "我在一场重要的比赛中失利了，让我感到很失败和自卑。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 470,
    logText: "我遭遇了网络诈骗，让我感到很愤怒。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 471,
    logText: "听说一位朋友遭遇了家庭暴力，让我感到对人性的失望。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 472,
    logText: "我被伴侣出轨，让我感到很伤心和失落。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 473,
    logText: "我在社交媒体上受到了网络暴力，让我感到很受伤和无助。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 474,
    logText: "我在聚会中感到格格不入，充满了孤独和无趣",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 475,
    logText: "听说我的老友在火灾中丧生，感到很伤心。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 476,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 477,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 478,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 479,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 480,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 481,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 482,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 483,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 484,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 485,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 486,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 487,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 488,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 489,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 490,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 491,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 492,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 493,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 494,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 495,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 496,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 497,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 498,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 499,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 500,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 501,
    logText: "结局：入狱",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 502,
    logText: "“你被逮捕了！”",
    nextStates: [{ possibility: 2.0, stateID: 501 }],
  },
  {
    stateID: 503,
    logText: "这名治安官比以往敌人强得多。我败了，无力地瘫倒在墙角。",
    nextStates: [{ possibility: 2.0, stateID: 502 }],
  },
  {
    stateID: 504,
    logText:
      "我有了些名声，有愚蠢的治安官认为我是邪教徒，竟然开始搜查我犯案的证据",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 505,
    logText: "治安官搜集到了我外出行动的证据",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 506,
    logText: "治安官搜集到了我采购物资的证据，真糟糕",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 507,
    logText:
      "治安官搜集到了我召集同伙的证据。假如我的名声再增大，或许我就有麻烦了",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 508,
    logText: "治安官找到我了！",
    nextStates: [{ possibility: 2.0, stateID: 509 }],
    className: "Navy",
  },
  {
    stateID: 509,
    logText: "或许我可以用一些钱来贿赂他，不然我就要背水一战了",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    className: "Navy",
    sheriff: {
      observe: 5,
      defend: 5,
      technique: 5,
      desire: 5,
      winNextStateID: 511,
    },
  },
  {
    stateID: 510,
    logText: "“你很不错。不过，下次就不是我了，呵呵，祝你好运~”",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    className: "Navy",
  },
  {
    stateID: 511,
    logText: "治安官迎来了他的末日。",
    nextStates: [{ possibility: 2.0, stateID: 510 }],
    className: "Darkred",
  },
  {
    stateID: 512,
    logText: "“胜利之人，你莫得意。我的同僚强大许多。”",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    className: "Navy",
    reputation: 10,
  },
];
export default issues;
