import styled from "styled-components";
import { Contents, Sidebar } from "@/components/Sidebar";
import { Pages } from "@/misc/constants";

export function Index() {
  return (
    <>
      <Sidebar page={Pages.Index} />
      <Contents>
        <div>Main Page</div>
        <p>
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </p>
      </Contents>
    </>
  );
}
