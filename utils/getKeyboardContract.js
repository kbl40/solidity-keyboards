import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0x22f6b9ECFF96955675263572315c85eCEc86014B";
const contractABI = abi.abi;

export default function getKeyboardContract(ethereum) {
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        return new ethers.Contract(contractAddress, contractABI, signer);
    } else {
        return undefined;
    }
}