import React from "react";
import { shallow } from "enzyme";
import CommentItem from "./CommentItem.Component";
import { Card } from "react-bootstrap";

describe("CommentItem", () => {
  it("Component is rendered", () => {
    const comment = {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est ",
      tags: ["AWS"],
    };
    const wrapper = shallow(<CommentItem comment={comment} />);
    const card = wrapper.find(Card);
    const cardLink = wrapper.find(Card.Link);
    expect(card.length).toBe(1);
    expect(cardLink.text()).toBe("AWS");
  });
  it("Tags are rendered", () => {
    const comment = {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est ",
      tags: ["AWS", "Testing"],
    };
    const wrapper = shallow(<CommentItem comment={comment} />);
    const cardLink = wrapper.find(Card.Link);
    expect(cardLink.length).toBe(2);
  });
});
