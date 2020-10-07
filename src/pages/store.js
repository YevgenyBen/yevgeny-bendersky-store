import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import inventoryActions from '../redux/actions/inventoryActions'
import Container from '@material-ui/core/Container';
import StoreCard from '../components/StoreCard'
import './Store.css'

import { inventory as inventoryData } from '../mock-data/Inventory.json';
function Store() {
    const [inventory, setInventory] = useState([])
    const dispatch = useDispatch();


    //mock data fetching instead of actual API call
    useEffect(() => {
        setInventory(inventoryData)
        dispatch(inventoryActions['ADD_INVENTORY'](inventoryData))
    }, [dispatch])

    return (
        <Container>
            <div className={"wrapper"}>
                {inventory && inventory.map((product, index) =>
                    <StoreCard product={product} key={index} />
                )}
            </div>
        </Container>

    )
}

export default Store
