import Member from "./Member";
function About() {
  return (
    <div>
      <div className="members">
        <Member
          name="Loor Jacobson"
          year="third"
          interests="Codding, research, reading, swimming"
        />
        <Member
          name="Namyalo Jennifer Bukenya"
          year="third"
          interests="I love Codding Me and dancing are inseperable. I love learning new things"
        />
        <Member
          name="Muzuva Joshua"
          year="third"
          interests="Front end development specifically centered around React and Angular together with VueJS"
        />
      </div>
    </div>
  );
}
export default About;
