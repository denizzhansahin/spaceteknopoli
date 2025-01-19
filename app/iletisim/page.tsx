import { title } from "@/components/primitives"

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>İletişim</h1>
      <br/>
      <br/>
      <iframe width="1800"
        height="800"
        src=
        "https://form.jotform.com/250156317892965"
        title="İletişim" >
      </iframe>
    </div>
  );
}
