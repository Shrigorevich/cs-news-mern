import React, { useState } from "react";
import { useHttp } from "../../hooks/httphook";

const TournamentCP = () => {
  const { request } = useHttp();

  const [form, setForm] = useState({
    title: "",
    datestart: "",
    datefinish: "",
    prize: "",
    game: "Dota 2",
    status: "active"
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addPost = async () => {
    try {
      await request("/api/tournament", "POST", { ...form });
    } catch (e) {}
  };

  const dropData = async () => {
      try {
          await request("/api/remove-tournaments")
      } catch (error) {
          
      }
  };

  const updateData = async () => {
      try {
        await request("/api/update-tournaments")
      } catch (error) {
          
      }
  }

  return (
    <div className="row">
      <div className="post-creation-panel col-md-6 col-12">
        <h1>Новый турнир</h1>
        <div className="d-flex flex-column">
          <label>Title</label>
          <input type="text" name="title" onChange={changeHandler} />
        </div>
        <div className="d-flex flex-column">
          <label>Date start</label>
          <input type="text" name="datestart" onChange={changeHandler} />
        </div>
        <div className="d-flex flex-column">
          <label>Date finish</label>
          <input type="text" name="datefinish" onChange={changeHandler} />
        </div>
        <div className="d-flex flex-column">
          <label>Prize</label>
          <input type="text" name="prize" onChange={changeHandler} />
        </div>
        <div className="d-flex justify-content-between">
          <select
            className="required"
            value={form.game}
            name="game"
            onChange={changeHandler}
          >
            <option value="Dota 2">Dota 2</option>
            <option value="League of Legends">LoL</option>
            <option value="CS GO">CS GO</option>
          </select>
          <button onClick={addPost}>add</button>
        </div>
      </div>
      <div className="manual col-md-6 col-12 d-flex flex-column justify-content-between">
        <div>
          <h3>Manual</h3>
          <p>- Title, datestart, datefinish, prize - обязательные поля.</p>
          <p>- Выпадающее меню по умолчанию устанавливает игру Dota 2.</p>
          <p>- НЕ ЗАБЫВАТЬ устанавливать правильную игру.</p>
          <p>- ADD - добалвяет раздел блога</p>
          <p>- Кнопка UPDATE DATA сортирует турниры</p>
          <p>- Кнопка DROP DATA полностью стирает все записи</p>
        </div>
        <div className="d-flex justify-content-between">
          <button onClick={updateData}>UPDATE DATA</button>
          <button className="drop-data" onClick={dropData}>DROP DATA</button>
        </div>
      </div>
    </div>
  );
};

export default TournamentCP;
