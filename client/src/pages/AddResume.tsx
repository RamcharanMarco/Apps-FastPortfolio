import { useState } from "react";
import { useResume } from "../hooks/resume";
import { useResumePhoto } from "../hooks/resumephoto";
import "../css/addResume.css";
import axios from "axios";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const { user, setresume } = useStore();
  const navigate = useNavigate();

  const { resume, loading2, error2 } = useResume();

  const [layout, setLayout] = useState<string>("one");
  const [photo, setPhoto] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [cell, setCell] = useState<string>("");
  const [talent, setTalent] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [workExperience, setWorkExperience] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>("");
  const [socialmedia, setSocialmedia] = useState<string>("");
  const [font, setFont] = useState<string>("'Roboto', sans-serif");
  const [showLayouts, setShowLayouts] = useState<boolean>(false);
  const [layPage, setLayPage] = useState<number>(1);

  const handleResume = (e: any) => {
    e.preventDefault();
    resume(
      layout,
      font,
      talent,
      age,
      country,
      province,
      name,
      surname,
      gender,
      hobbies,
      cell,
      about,
      skills,
      education,
      workExperience,
      socialmedia
    );
  };

  const handleResumePhoto = async (e: any) => {
    e.preventDefault();
    const body = {
      layout,
      font,
      talent,
      age,
      country,
      province,
      name,
      surname,
      gender,
      cell,
      about,
      photo,
      hobbies,
      skills,
      education,
      workExperience,
      socialmedia,
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/resume/resumephoto",
        body,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = await res.data;
      console.log(data);
      setresume(data);
      localStorage.setItem("resume", data);
      navigate("/user/console");
    } catch (error) {
      console.log(error);
    }
  };

  const displayLayouts = (e: any) => {
    e.preventDefault();
    setShowLayouts(!showLayouts);
  };

  const prev = (e: any) => {
    e.preventDefault();
    if(layPage === 1){
      setLayPage(4)
    }else{
      setLayPage((prev) => prev - 1)
    }
  };

  const next = (e: any) => {
    e.preventDefault();
    if(layPage === 4){
      setLayPage(1)
    }else{
      setLayPage((prev) => prev + 1)
    }
  };

  return (
    <div className="addResume">
      {showLayouts ? (
        <div className="layouts">
            <button className="prev" onClick={prev}>prev</button>
          {
            layPage === 1 ? <button onClick={(e) => {setLayout("one"); displayLayouts(e)}}>layout1 with pic</button>
            :layPage === 2 ?           <button onClick={(e) => {setLayout("two"); displayLayouts(e)}}>layout2 with pic</button>
            :layPage === 3 ?          <button onClick={(e) => {setLayout("three"); displayLayouts(e)}}>layout3 without pic</button>
            :layPage === 4 ?            <button onClick={(e) => {setLayout("four"); displayLayouts(e)}}>layout4 without pic</button>
            : null
          }
          <p className="len">{layPage}/4</p>
                      <button className="next" onClick={next}>next</button>
           <button className="close" onClick={displayLayouts}>close</button>
        </div>
      ) : null}
      <div className="chooselayout">
        <button onClick={displayLayouts}>change layout</button>
        <p>{layout}</p>
      </div>
      <form>
        {layout === "four" ? (
          ""
        ) : (
          <input
            placeholder="photo"
            className="border"
            type="file"
            name="photo"
            onChange={(e: any) => setPhoto(e.target.files[0])}
          />
        )}
        <input
          placeholder="talent"
          className="border"
          type="text"
          value={talent}
          onChange={(e) => setTalent(e.target.value)}
        />
        <input
          placeholder="age"
          className="border"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="country"
          className="border"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          placeholder="province"
          className="border"
          type="text"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
        <input
          placeholder="name"
          className="border"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="surname"
          className="border"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          placeholder="cell"
          className="border"
          type="text"
          value={cell}
          onChange={(e) => setCell(e.target.value)}
        />
        <input
          placeholder="gender"
          className="border"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          placeholder="skills"
          className="border"
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <input
          placeholder="workExperience"
          className="border"
          type="text"
          value={workExperience}
          onChange={(e) => setWorkExperience(e.target.value)}
        />
        <input
          placeholder="education"
          className="border"
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <input
          placeholder="hobbies"
          className="border"
          type="text"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
        />
        <input
          placeholder="socialmedia"
          className="border"
          type="text"
          value={socialmedia}
          onChange={(e) => setSocialmedia(e.target.value)}
        />
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="'Roboto', sans-serif">roboto</option>
          <option value="'Open Sans', sans-serif">open sans</option>
          <option value="'Overlock', cursive">overlock</option>
          <option value="'Poppins', sans-serif">poppins</option>
          <option value="'Quicksand', sans-serif">quicksand</option>
          <option value="'Barlow', sans-serif">barlow</option>
        </select>
        <textarea
          placeholder="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        {layout === "four" ? (
          <button className="border" onClick={handleResume}>
            create ur resume
          </button>
        ) : (
          <button className="border" onClick={handleResumePhoto}>
            create ur resume
          </button>
        )}
      </form>
    </div>
  );
};

export default AddResume;
