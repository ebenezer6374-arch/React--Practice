import { useState } from "react";
function SkillsForm() {
    const [skills, setSkills] = useState([]);
    function handleSkillChange(e) {
        const { value, checked } = e.target;
        setSkills((prevSkills) => {
            if (checked) {
                return [...prevSkills, value];
            }
            return prevSkills.filter((skill) => skill !== value);
        });
    }
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value="React"
                    onChange={handleSkillChange}
                />
                React
            </label>

            <label>
                <input
                    type="checkbox"
                    value="Node"
                    onChange={handleSkillChange}
                />
                Node
            </label>

            <label>
                <input
                    type="checkbox"
                    value="Java"
                    onChange={handleSkillChange}
                />
                Java
            </label>

            <label>
                <input
                    type="checkbox"
                    value="SQL"
                    onChange={handleSkillChange}
                />
                SQL
            </label>

            <h3>Selected Skills:</h3>

            <pre>{JSON.stringify(skills, null, 2)}</pre>
        </div>
    );
}

export default SkillsForm;