import React from "react";
import resume from "../../images/resume2020.pdf"

export default function Resume() {
return(

    <div className="mainsection">
    <section className="border row">

        <div className="content col-md-12 text-center contStyle center">
            <header className="sectionhead">Resume</header>

            <embed src={resume} width="800px" height="2100px" />

        </div>



    </section>
</div>
)

}