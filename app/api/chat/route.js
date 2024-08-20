import { NextResponse } from "next/server";
import { GoogleGenerativeAI} from '@google/generative-ai';

const systemPrompt = `Starting your skincare routine with a gentle cleanser is crucial for 
removing impurities and excess oil, preventing clogged pores and breakouts, and preparing 
the skin for subsequent products. Applying a moisturizer suitable for your skin type helps to hydrate and protect the skin barrier, 
preventing dryness and irritation. Look for products with hyaluronic acid for intense hydration. 
Incorporating exfoliation into your skincare routine 1-2 times a week helps to remove dead skin cells from the surface, 
promoting cell turnover and revealing smoother, brighter skin underneath. Daily application of a broad-spectrum sunscreen with at least SPF 30 is 
essential for protecting the skin from harmful UV rays, preventing premature aging and reducing the risk of skin cancer. A balanced diet rich in antioxidants and staying 
hydrated contribute to skin health from the inside out, supporting the skin's ability to maintain moisture and elasticity. Regular physical activity increases blood flow to the skin, 
nourishing skin cells and helping to carry away waste products, including free radicals, from working cells. Managing stress through practices like meditation, yoga, or 
even deep-breathing exercises can help reduce the occurrence of stress-related skin issues such as acne and eczema.
Question: What are the key components of an effective skincare routine that promotes healthy, glowing skin?`

export async function POST(req) {
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: systemPrompt});

try {
const data = await req.json();
const conversationHistory = data.map(message => {
return `${message.content}`;
}).join("");

const prompt = `${model.systemInstruction}\n\nHere's what has been discussed so far:${conversationHistory}\n`;

const result = await model.generateContentStream(prompt);
const response = await result.response;
const text = response.text();

return new Response(text);

} catch (error) {
    console.error("Error in API Call:", error.message);
    console.error("Full Error Details:", error);
    return NextResponse.json({ error: "Error generating response" }, { status: 500 });
}

}

/*

// Import necessary modules
import { NextResponse } from 'next/server'

// Your system prompt
const systemPrompt = `Starting your skincare routine with a gentle cleanser is crucial for 
removing impurities and excess oil, preventing clogged pores and breakouts, and preparing 
the skin for subsequent products. Applying a moisturizer suitable for your skin type helps to hydrate and protect the skin barrier, 
preventing dryness and irritation. Look for products with hyaluronic acid for intense hydration. 
Incorporating exfoliation into your skincare routine 1-2 times a week helps to remove dead skin cells from the surface, 
promoting cell turnover and revealing smoother, brighter skin underneath. Daily application of a broad-spectrum sunscreen with at least SPF 30 is 
essential for protecting the skin from harmful UV rays, preventing premature aging and reducing the risk of skin cancer. A balanced diet rich in antioxidants and staying 
hydrated contribute to skin health from the inside out, supporting the skin's ability to maintain moisture and elasticity. Regular physical activity increases blood flow to the skin, 
nourishing skin cells and helping to carry away waste products, including free radicals, from working cells. Managing stress through practices like meditation, yoga, or 
even deep-breathing exercises can help reduce the occurrence of stress-related skin issues such as acne and eczema.
Question: What are the key components of an effective skincare routine that promotes healthy, glowing skin?`

// Handle POST requests
export async function POST(req) {
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  try {
    const data = await req.json()
    
    // Simulate model response
    const modelResponse = {
        message: {parts: systemPrompt}, ...data,
        model: model
    };

    // Return the response
    return NextResponse.json({ message: modelResponse.choices[0].message.parts })
} catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
    }
}

// Optionally, handle other HTTP methods (e.g., GET) if needed
export async function GET() {
    return NextResponse.json({ message: 'Welcome to the chat API!' })
}
*/

/*
// Import necessary modules
import { NextResponse } from 'next/server'

// Your system prompt
const systemPrompt = `Starting your skincare routine with a gentle cleanser is crucial for 
removing impurities and excess oil, preventing clogged pores and breakouts, and preparing 
the skin for subsequent products. Applying a moisturizer suitable for your skin type helps to hydrate and protect the skin barrier, 
preventing dryness and irritation. Look for products with hyaluronic acid for intense hydration. 
Incorporating exfoliation into your skincare routine 1-2 times a week helps to remove dead skin cells from the surface, 
promoting cell turnover and revealing smoother, brighter skin underneath. Daily application of a broad-spectrum sunscreen with at least SPF 30 is 
essential for protecting the skin from harmful UV rays, preventing premature aging and reducing the risk of skin cancer. A balanced diet rich in antioxidants and staying 
hydrated contribute to skin health from the inside out, supporting the skin's ability to maintain moisture and elasticity. Regular physical activity increases blood flow to the skin, 
nourishing skin cells and helping to carry away waste products, including free radicals, from working cells. Managing stress through practices like meditation, yoga, or 
even deep-breathing exercises can help reduce the occurrence of stress-related skin issues such as acne and eczema.
Question: What are the key components of an effective skincare routine that promotes healthy, glowing skin?`

// Handle POST requests
export async function POST(req) {
try {
const data = await req.json()

// Simulate model response
const modelResponse = ({
    messages: [{role: "system", parts: systemPrompt,}, ... data]
})

// Return the response
return NextResponse.json({ message: modelResponse.choices[0].message.parts })
} catch (error) {
console.error('Error processing request:', error)
return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
}
}

// Optionally, handle other HTTP methods (e.g., GET) if needed
export async function GET() {
return NextResponse.json({ message: 'Welcome to the chat API!' })
}
 /////////////////////////////////////////////////////////////////
import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const systemPrompt = `Starting your skincare routine with a gentle cleanser is crucial for 
removing impurities and excess oil, preventing clogged pores and breakouts, and preparing 
the skin for subsequent products. Applying a moisturizer suitable for your skin type helps to hydrate and protect the skin barrier, 
preventing dryness and irritation. Look for products with hyaluronic acid for intense hydration. 
Incorporating exfoliation into your skincare routine 1-2 times a week helps to remove dead skin cells from the surface, 
promoting cell turnover and revealing smoother, brighter skin underneath. Daily application of a broad-spectrum sunscreen with at least SPF 30 is 
essential for protecting the skin from harmful UV rays, preventing premature aging and reducing the risk of skin cancer. A balanced diet rich in antioxidants and staying 
hydrated contribute to skin health from the inside out, supporting the skin's ability to maintain moisture and elasticity. Regular physical activity increases blood flow to the skin, 
nourishing skin cells and helping to carry away waste products, including free radicals, from working cells. Managing stress through practices like meditation, yoga, or 
even deep-breathing exercises can help reduce the occurrence of stress-related skin issues such as acne and eczema.
Question: What are the key components of an effective skincare routine that promotes healthy, glowing skin?`

const data = await req.json()
const chat = model.chat({
    messages: [{role: "system", parts: systemPrompt,}, ... data]
});
return NextResponse.json({message: chat.choices[0].message.parts})


export async function POST(req){
    const data = await req.json()
    const chat = await model.chat({
        messages: [{role: "system", parts: systemPrompt,}, ... data]
        })
    return NextResponse.json({message: chat.choices[0].message.parts})
}

*/



