import { mainStyle } from "./style.css"

export default function About() {
  return (
    <main>
      <div className={mainStyle.lesson}>練習 Vanilla-extract</div>
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
