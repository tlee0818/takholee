import React, { useState } from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([
    {
      text: "Took my first CS Course, Principles of Computing",
      date: "Fall 2017",
      category: {
        tag: "school",
        color: "#cc002b",
      },
      link: {
        url: "https://www.cs.cmu.edu/~15110/",
        text: "Course Website",
      },
    },
    {
      text: "Summer Technology Intern at SK Telecom (SKT)",
      date: "Summer 2018",
      category: {
        tag: "work",
        color: "#018f69",
      },
      link: {
        url: "https://www.sktelecom.com/index.html",
        text: "SKT",
      },
    },
    {
      text: "Enlisted in South Korean Army",
      date: "Summer 2019",
      category: {
        tag: "work",
        color: "#018f69",
      },
      link: {
        url: "https://photos.app.goo.gl/UobQZAkzq33YjLfj6",
        text: "After my 5-week bootcamp",
      },
    },
    {
      text: "Acquired certificate of Craftsman Information Processing",
      date: "Summer 2020",
      category: {
        tag: "independent",
        color: "#07374a",
      },
    },
    {
      text: "Honorably discharged from South Korean Army",
      date: "Spring 2021",
      category: {
        tag: "work",
        color: "#018f69",
      },
    },
    {
      text: "Visiting Student at Seoul National University",
      date: "Summer 2019",
      category: {
        tag: "school",
        color: "#cc002b",
      },
    },
    {
      text: "SWE Intern at Fasoo",
      date: "Summer 2021",
      category: {
        tag: "work",
        color: "#018f69",
      },
      link: {
        url: "https://www.digitalpage.me/",
        text: "Some things I worked on",
      },
    },
    {
      text: "Research Assistant at Institute for Software Research",
      date: "Spring 2022",
      category: {
        tag: "independent",
        color: "#07374a",
      },
      link: {
        url: "https://symposium.foragerone.com/meeting-of-the-minds-2022/presentations/46077",
        text: "My Poster Presentation on Open Source",
      },
    },
    {
      text: "SWE Intern at Loom",
      date: "Summer 2022",
      category: {
        tag: "work",
        color: "#018f69",
      },
      link: {
        url: "https://www.loom.com/about-us",
        text: "Loom",
      },
    },
  ]);

  if (timelineData.length > 0) {
    return (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Timeline;
