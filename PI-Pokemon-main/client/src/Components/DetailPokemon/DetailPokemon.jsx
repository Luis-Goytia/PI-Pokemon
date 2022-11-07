import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../Redux/actions/actions";

export default function DetailPokemon() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    //const loading = useSelector((state)=>state.loading)

    useEffect(() => {
        if (id) dispatch(getDetail(id))
      }, [dispatch, id]);
    
    

    return (
        <>
            <div>
                <img src={detail.img} alt="" />
            </div>
            <div>
                <h1>HP:{ detail.hp}</h1>
                <h1></h1>
                <h1></h1>
            </div>
        </>
    );
}
