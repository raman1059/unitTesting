import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();  // Arrange-Creating instance

  });
  it('Should increment totalVotes when upVoted', () => {
    component.upVote();                     // Act-Calling a method or function

    expect(component.totalVotes).toBe(1);   // Assert-Assertion
  });

  it('Should decrement totalVotes when downVoted', () => {
    component.downVote();                     // Act-Calling a method or function

    expect(component.totalVotes).toBe(-1);   // Assert-Assertion
  });
});
