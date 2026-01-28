from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import asyncio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.websocket("/ws/orders/{order_id}")
async def order_tracking(websocket: WebSocket, order_id: str):
    await websocket.accept()

    statuses = [
        "Order Confirmed",
        "Preparing Food",
        "Out for Delivery",
        "Delivered"
    ]

    for status in statuses:
        await websocket.send_json({
            "orderId": order_id,
            "status": status
        })
        await asyncio.sleep(3)  # simulate real-time updates

    await websocket.close()
