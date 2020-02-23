import React from "react";

export default function Contact() {
    return (

        <div className="mainsection">
            <section className="border row">

                <div className="content col-md-12 contStyle" >
                    <header className="sectionhead">How to contact John</header>

                    <h5 className="mt-4 mb-4">Contact Info</h5>
                    <div>Email: johndmccutchen@yahoo.com</div>
                    <div>Phone: 435-640-9145</div>
                    <div>GitHub:
                <a id="gitHub" href="https://github.com/jmccutchen"
                            target="_blank" rel="noopener noreferrer">https://github.com/jmccutchen</a>
                    </div>
                    <div className="mb-4">Linkedin:
                <a id="linkedIn" href="https://www.linkedin.com/in/johndmccutchen" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/in/johndmccutchen</a>
                    </div>



                </div>



            </section>
        </div>
    )

}