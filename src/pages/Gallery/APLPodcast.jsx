import React, { useState, useEffect, useRef } from "react";




const audioTracks = [
  { title: "Chennai Live Interview - Part 1", url: "/assets/music.mp3"},
  { title: "Chennai Live Interview - Part 2", url: "/assets/music.mp3"},
  { title: "Chennai Live Interview - Part 3", url: "/assets/music.mp3" },
  { title: "Chennai Live Interview - Part 4", url: "/assets/music.mp3" },
  { title: "Chennai Live Interview - Part 5", url: "/assets/music.mp3" },
];
const videos = [
    {
    title: "",
    description:
    [
      'On October 6, 2025, Connaissance Specialists and We Avec U hosted an inspiring podcast session titled “Joyful Schools: Where Every Child Feels Seen, Heard & Valued”. Our founder Director Ms. Gita Jagannathan was in conversation with the host Ms Krithika. In the podcast she shares among other things, her insights on how we design learning spaces to ensure every child feels seen, heard, and valued.', 
      'It is a pleasure to hear her talk about how she sees education, children and creating joyful learning environments.',
    ],
      
    src: "https://www.youtube.com/embed/Tb3FCoRxxbU",
  },
  {
    title: "EPISODE 1",
    description:
      "Join Vikram Seshadri and Shreya Bharathwajan, as they have a conversation with new students about their exciting and new experiences.",
    src: "https://www.youtube.com/embed/6JnpPupQx6c",
  },
  {
    title: "EPISODE 2, PART 1",
    description:
      "Tune in to Shreya interviewing Avyukt and ma’am about inclusivity at APL. Their experiences shall provide you, the listener, with a perspective on how things work at APL.",
    src: "https://www.youtube.com/embed/COsRSLhF2RE",
  },
    {
    title: "EPISODE 2, PART 2",
    description:
      "Tune in to Shreya interviewing Avyukt and ma’am about inclusivity at APL. Their experiences shall provide you, the listener, with a perspective on how things work at APL.",
    src: "https://www.youtube.com/embed/JfZfloivNfw",
  },
    {
    title: "EPISODE 3",
    description:
      "Join Sanjana and Sathvik, as they interview the ASPLs of 2022-23. Hear them reflect on their ideas and initiatives in this exclusive conversation.",
    src: "https://www.youtube.com/embed/GEzZ5D-clfs",
  },
    {
    title: "EPISODE 1",
    description:
      "In this episode join Shreya Bharathwajan in conversation with the principal of APL GLOBAL, Mrs Sarija Santhosh who will be sharing her time at APL, what she is passionate about, how APL is unique and more!",
    src: "https://www.youtube.com/embed/yyOxmgq53bI",
  },
      {
    title: "EPISODE 2",
    description:
      "In this episode, we are back with Shreya Bharathwajan who is going to be talking to the newly elected School pupil leader and Assistant school pupil leaders. Tune in to see all the amazing stuff they have planned for the year, and more.",
    src: "https://www.youtube.com/embed/VKq108BaRXw",
  },
        {
    title: "EPISODE 3A",
    description:
      "Hey there, we are back with Shreya Bharathwajan again and today we have something very exciting planned. We are going to be talking to some of our alumni and guess what!, they are here to clear all your doubts and misconceptions about college applications, what you should do and when, tips and more. So tune in for this fun interaction yet an important sharing of information. There are three parts to this episode.",
    src: "https://www.youtube.com/embed/IEoLPyJFzR8",
  },
     {
    title: "EPISODE 3B",
    description:
      "Tune in to hear about what Hrsh, Meghna, Nishka and Tanmay’s wow factors were, how they were able to manage their time, what kind of volunteering work and internships to do and more.",
    src: "https://www.youtube.com/embed/1XWHWINhrLs",
  },
    {
    title: "EPISODE 3C",
    description:
      "Tune in to hear about what makes a college essay stand out, some tips, how APL’s counsellors helped with the college admissions process and more.",
    src: "https://www.youtube.com/embed/djLdypUnOm0",
  },
];

// Helper to format seconds to mm:ss
const formatTime = (time) => {
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

function APLPODCAST() {
  
  const [playingIndex, setPlayingIndex] = useState(null);
  const [durations, setDurations] = useState({});
  const [currentTimes, setCurrentTimes] = useState({});
  const audioRefs = useRef([]);

  
  const togglePlay = (i) => {
    const currentAudio = audioRefs.current[i];
    if (!currentAudio) return;

    if (playingIndex === i) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex]?.pause();
      }
      currentAudio.play();
      setPlayingIndex(i);
    }
  };

  const handleLoadedMetadata = (i, e) => {
    const duration = e.target.duration;
    setDurations((prev) => ({ ...prev, [i]: duration }));
  };

  const handleTimeUpdate = (i, e) => {
    const currentTime = e.target.currentTime;
    setCurrentTimes((prev) => ({ ...prev, [i]: currentTime }));
  };

  return (
    <>

      {/* Podcast Section */}
      {/* <section
        className="bg-white py-12 px-6 md:px-16 font-sans relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <h2 className="text-lg md:text-2xl font-semibold font-primary text-primary uppercase underline underline-offset-4 decoration-secondary">
          An Interview with Chennai Live 104.8 FM
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-10 items-start relative">
        
          <div>
            <p className="text-sm font-secondary text-gray-700 mb-6">
              On learning about the exceptional pedagogy and holistic approach
              to education followed at APL, our founder and MD, Mrs. Gita
              Jagannathan was invited by Chennai Live 104.8 FM for an interview on
              5th September 2016. She spoke about the philosophy and the ethos
              of the school.
            </p>

            <div className="space-y-4">
              {audioTracks.map((track, i) => (
                <div key={i} className="flex items-center gap-2">
                  <button
                    onClick={() => togglePlay(i)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/80 text-white hover:bg-primary transition"
                  >
                    {playingIndex === i ? (
                      <Pause size={18} />
                    ) : (
                      <Play size={18} />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="text-xs font-secondary text-gray-600 mb-1">
                      {track.title}
                    </div>

                    <audio
                      ref={(el) => (audioRefs.current[i] = el)}
                      src={track.url}
                      preload="auto"
                      onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                      onTimeUpdate={(e) => handleTimeUpdate(i, e)}
                      onEnded={() => setPlayingIndex(null)}
                    />

              
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{formatTime(currentTimes[i] || 0)}</span>
                      <span>{formatTime(durations[i] || 0)}</span>
                    </div>

                  
                    <div className="h-2 bg-gray-200 rounded mt-1 relative overflow-hidden">
                      <div
                        className="h-2 bg-secondary rounded"
                        style={{
                          width: durations[i]
                            ? `${
                                ((currentTimes[i] || 0) / durations[i]) * 100
                              }%`
                            : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <div className="relative">
            <div className="p-4 relative z-10">
              <img src={niosLogo} alt="NIOS" className="w-full mb-4" />
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-primary rounded-md -z-10 blur-xl opacity-20 scale-110"></div>
          </div>
        </div>
      </section> */}
      <section
        className="px-6 md:px-16 py-12 font-sans"
        style={{ backgroundImage: `url(${"/assets/grid-1.webp"})`, backgroundSize: "cover" }}
      >

        {/* Section Header */}
        <h2 className="text-lg md:text-2xl font-primary font-semibold text-primary uppercase underline underline-offset-4 decoration-secondary text-left">
          APL PODCAST
        </h2>
        <p className="mt-4 text-base sm:text-base font-secondary text-primary leading-relaxed text-left">
          APL podcast, a student-driven initiative was conceptualised with an
          objective of sharing and expressing students’
          <br />
          views based on their experiences at school. Each episode gives an
          overview as they recall their journey in learning, they learned.
        </p>

    {/* Podcast Episodes */}
      <div className="space-y-20 mt-12">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-start gap-8`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 text-primary">
              <h3 className="text-lg font-semibold font-primary underline underline-offset-4 decoration-secondary uppercase mb-4">
                {video.title}
              </h3>

              <div className="space-y-4 font-secondary text-base leading-relaxed">
                {Array.isArray(video.description)
                  ? video.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))
                  : <p>{video.description}</p>}
              </div>
            </div>

            {/* Video Section */}
            <div className="md:w-1/2 aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={video.src}
                title={`YouTube video ${idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>

      </section>
    </>
  );
}

export default APLPODCAST;
