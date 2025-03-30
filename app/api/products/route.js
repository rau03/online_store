import Stripe from "stripe";
import '../../../envConfig.js'

const API_KEY = process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(API_KEY);

export async function GET() {
    
} 