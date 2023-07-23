import { myStyle } from "./style.css"

export default function Home() {
  return (
    <main>
      <h2 className={myStyle}>
        練習 Vanilla-extract
      </h2>
      <p className={myStyle}>
        練習 Vanilla-extract
      </p>
      <table>
        <thead>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
