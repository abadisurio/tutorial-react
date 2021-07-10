import React, {useEffect, useState} from 'react';
import { Skeleton } from '@material-ui/lab';

const Home = () => {

    // const counter = 0;
    const [counter, setCounter] = useState(0);
    const [isLoading, setLoading ] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    });
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);

        const simpanan1 = localStorage.getItem('counter');
        const simpanan2 = localStorage.getItem('isLoading');
        console.log('simpanan: ', simpanan1, simpanan2);

        return () => clearTimeout(timer);
    }, [counter]);

    const simpanNilai  = () => {
        localStorage.setItem('counter', counter);
        localStorage.setItem('isLoading', isLoading);
    }

    const tambahCounter = (berapa) => {
        // console.log("berhasil");
        setCounter(counter + berapa);
        console.log("counter berhasil ditambah, jadi: ", counter);
    }

    return (
        <div>
            {
                isLoading
                    ? <h1><Skeleton variant="rect" animation="wave" /></h1>
                    : <h1>loading selesai</h1>
            }
            <h1>Ini halaman home</h1>
            <h1>itungan ke {counter}</h1>
            <button className="btn btn-primary" onClick={() => tambahCounter(3)} >tambah 3</button>
            <button className="btn btn-primary" onClick={() => tambahCounter(1)} >tambah</button>
            <button className="btn btn-warning" onClick={simpanNilai} >Simpan Nilai</button>
            {/* <button className="btn btn-warning" onClick={() => simpanNilai(1)} >Simpan Counter</button> */}
        </div>
    )
}

export default Home;