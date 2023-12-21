import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>sudansupanda063@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Bhubaneswar</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+91 832774....</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
