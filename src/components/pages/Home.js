import React from "react";
import picMe from "../../images/picofme.jpg"

export default function Home() {
    return (

        <div className="mainsection">
            <section className="border">
                <div className="container contStyle">
                    <header className="sectionhead">What is John's Story?</header>

                    <div className="content row">
                        <div className="col-md-12">
                            <div><img id="profilepic" src={picMe} alt="John"></img>
                            </div>
                                <p> The story goes that John McCutchen is a passionate, hard working man that thrives on
                                    pushing himself and his team to the next level. He gets more out of work than a pay check.
                                    He also derives meaning, and satisfaction by improving the work world around him. He does
                                    this by constantly looking for ways to improve himself and processes and is always willing
                                    to help out his colleagues.
                                    </p>
                                <p></p>
                                <p>
                                    He has an unending curiousity and is very passionate about learning. This allows him to not
                                    be afraid to tackle challenging tasks of which he can
                                    gain new knowledge and experiences from. Most say that John is fun to be around and is able
                                    to find and create humor in many situations. He believes it is important to be
                                    able to laugh with others at work as long as it does not interfere with progress.
                                </p>
                                <p></p>
                                <p>
                                    John has experience in many industries in a variety of roles. He managed a restaurant for
                                    six years. He was a group leader at a residential outdoor school for troubled boys. He
                                    worked at a bank for two years. He worked at a ski school and gave snow mobile tours at
                                    night.
                                    He has worked in a technical customer support role. In his most recent endeavor, he has
                                    found his passion in Information Security as a Risk Analyst. In all of his professional
                                    roles, he has excelled and proven himself earning promotions
                                    to new positions. John has learned from each of his roles and they have contributed to the
                                    person he is today. He looks forward to more adventures.
                                </p>
                                <p></p>

                    
                        </div>

                    </div>
                </div>
            </section>
        </div>
            )
            
}