import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-3">Next.js Gmailアプリ</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              お名前
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              メールアドレス
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              メッセージ
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">
            メール送信
          </button>
        </form>
      </div>
    </>
  );
}
