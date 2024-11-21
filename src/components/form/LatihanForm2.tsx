import { FormEvent, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./LatihanForm.css";

interface Biodata {
  nama: string;
  email: string;
  phone: string;
}
const LatihanForm2 = () => {
  const defaultState: Biodata = {
    nama: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState<Biodata>(defaultState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("form", form);
  };

  return (
    <>
      <form className="latihan_form" onSubmit={handleSubmit}>
        <h2>Form Biodata</h2>
        <div className="latihan_form_item">
          <label htmlFor="">Nama</label>
          <Input
            value={form?.nama}
            onChange={(e) => {
              setForm({ ...form, nama: e.target.value });
            }}
            style={{ marginLeft: 10 }}
            placeholder="Masukan Nama"
            required
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="">Email</label>
          <Input
            value={form?.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            type="email"
            style={{ marginLeft: 10 }}
            placeholder="Masukan Email"
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="">Telephon</label>
          <Input
            value={form?.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
            style={{ marginLeft: 10 }}
            placeholder="Masukan Telephon"
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <Button label="Submit" />
        </div>
      </form>
    </>
  );
};

export default LatihanForm2;