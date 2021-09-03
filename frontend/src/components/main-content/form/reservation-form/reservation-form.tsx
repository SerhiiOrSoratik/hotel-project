import "./reservation-form.css";

export const ReservationForm = () => {
  const onSubmitHandler = (event: any) => {
    const form = document.getElementById("visitor_form") as HTMLFormElement;
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div>
      <form id="visitor_form" onSubmit={onSubmitHandler}>
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="name"
            style={{ width: "100%" }}
          />
          <div className="input-container">
            <select className="select" name="classRoom">
              <option value="luxury">luxury</option>
              <option value="standart">standart</option>
              <option value="econom">econom</option>
            </select>
            <select className="select" name="TypeRoom">
              <option value="SGL">SGL</option>
              <option value="DBL">DBL</option>
            </select>
          </div>
          <div className="input-container">
            <input
              type="date"
              name="startDate"
              placeholder="startDate"
              className="select-date"
            />
            <input
              type="date"
              name="endDate"
              placeholder="endDate"
              className="select-date"
            />
          </div>
        </div>
        <button type="submit" className="reservation-button">
          Find room
        </button>
      </form>
    </div>
  );
};
