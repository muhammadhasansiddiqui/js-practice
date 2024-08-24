prprint("Hello, World!")
a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")


#   age 

age = int(input("Enter your age: "))
if age < 18:
    print("You are a minor.")
    print("You are not eligible to vote.")
    print("You are not eligible to drive.")
    print("You are not eligible to marry.")
    print("You are not eligible to drink.")
    print("You are not eligible to vote.")

        elif age >= 18 and age < 21:
    print("You are an adult.")
    print("You are eligible to vote.")
    print("You are not eligible to drive.")
    print("You are not eligible to marry.")
    print("You are not eligible to drink.")
    print("You are not eligible to vote.")

        elif age >= 21 and age < 24:
    print("You are an adult.")
    print("You are eligible to vote.")

    print("You are eligible to drive.")
    print("You are not eligible to marry.")
    print("You are not eligible to drink.")
    print("You are not eligible to vote.")

        elif age >= 24 and age < 27:
    print("You are an adult.")
    print("You are eligible to vote.")

    print("You are eligible to drive.")


    # todo 


    todo = input("Enter your todo: ")   

    if todo == "study":
        print("You should study for 2 hours.")
    
    elif todo == "exercise":
        print("You should exercise for 30 minutes.")
        print("You should exercise for 30 minutes.")
        print("You should exercise for 30 minutes.")
        print("You should exercise for 30 minutes.")
        print("You should exercise for 30 minutes.")
        print("You should exercise for 30 minutes.")



        # chat app fucationality

        print("Welcome to the chat app!")
        print("Please enter your name:")
        name = input()
    
        print("Hello " + name + "! How are you today?")
        feedback = input()
        print("Thank you for your feedback!")
        print("Have a great day!")
        print("Have a great day!")
        print("Have a great day!")
    


            elif todo == "sleep":
        print("You should sleep for 8 hours.")

        elif todo == "work":
        print("You should work for 8 hours.")

        elif todo == "eat":
        print("You should eat for 2 hours.")
        print("You should eat for 2 hours.")
        print("You should eat for 2 hours.")


            elif todo == "chat":
        print("You should chat for 1 hour.")



        # arry to obj
        arr = [1, 2, 3, 4, 5]
        obj = {}
        for i in arr:
            obj[i] = i
            print(obj)

            # arry to obj
            arr = [1, 2, 3, 4, 5]
            obj = {}
        
        import socket
import threading
import tkinter as tk
from tkinter import scrolledtext, simpledialog, messagebox

# Server class to handle client connections and broadcasting messages
class ChatServer:
    def __init__(self, host='127.0.0.1', port=5000):
        self.host = host
        self.port = port
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.bind((self.host, self.port))
        self.server.listen()
        self.clients = []
        self.nicknames = []
        print(f"Server started on {self.host}:{self.port}")

    def broadcast(self, message, _client=None):
        for client in self.clients:
            if client != _client:
                try:
                    client.send(message)
                except:
                    client.close()
                    self.remove_client(client)

    def handle_client(self, client):
        while True:
            try:
                message = client.recv(1024)
                self.broadcast(message, client)
            except:
                self.remove_client(client)
                break

    def receive(self):
        while True:
            client, address = self.server.accept()
            print(f"Connected with {str(address)}")

            client.send('NICKNAME'.encode('utf-8'))
            nickname = client.recv(1024).decode('utf-8')
            self.nicknames.append(nickname)
            self.clients.append(client)

            print(f"Nickname is {nickname}")
            self.broadcast(f'{nickname} joined the chat!'.encode('utf-8'))
            client.send('Connected to the server!'.encode('utf-8'))

            thread = threading.Thread(target=self.handle_client, args=(client,))
            thread.start()

    def remove_client(self, client):
        if client in self.clients:
            index = self.clients.index(client)
            self.clients.remove(client)
            client.close()
            nickname = self.nicknames[index]
            self.broadcast(f'{nickname} has left the chat!'.encode('utf-8'))
            self.nicknames.remove(nickname)


# Client class with GUI to send and receive messages
class ChatClient:
    def __init__(self, master, host='127.0.0.1', port=5000):
        self.master = master
        self.host = host
        self.port = port
        self.client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.client


    
       
       
import socket
import threading
import tkinter as tk
from tkinter import scrolledtext, simpledialog, messagebox

# Server class to handle client connections and broadcasting messages
class ChatServer:
    def __init__(self, host='127.0.0.1', port=5000):
        self.host = host
        self.port = port
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.bind((self.host, self.port))
        self.server.listen()
        self.clients = []
        self.nicknames = []
        print(f"Server started on {self.host}:{self.port}")

    def broadcast(self, message, _client=None):
        for client in self.clients:
            if client != _client:
                try:
                    client.send(message)
                except:
                    client.close()
                    self.remove_client(client)

    def handle_client(self, client):
        while True:
            try:
                message = client.recv(1024)
                self.broadcast(message, client)
            except:
                self.remove_client(client)
                break

    def receive(self):
        while True:
            client, address = self.server.accept()
            print(f"Connected with {str(address)}")

            client.send('NICKNAME'.encode('utf-8'))
            nickname = client.recv(1024).decode('utf-8')
            self.nicknames.append(nickname)
            self.clients.append(client)

            print(f"Nickname is {nickname}")
            self.broadcast(f'{nickname} joined the chat!'.encode('utf-8'))
            client.send('Connected to the server!'.encode('utf-8'))

            thread = threading.Thread(target=self.handle_client, args=(client,))
            thread.start()

    def remove_client(self, client):
        if client in self.clients:
            index = self.clients.index(client)
            self.clients.remove(client)
            client.close()
            nickname = self.nicknames[index]
            self.broadcast(f'{nickname} has left the chat!'.encode('utf-8'))
            self.nicknames.remove(nickname)


# Client class with GUI to send and receive messages
class ChatClient:
    def __init__(self, master, host='127.0.0.1', port=5000):
        self.master = master
        self.host = host
        self.port = port
        self.client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.client.connect((self.host, self.port))
        self.nickname = None

        self.master.title("Chat Application")
        self.master.protocol("WM_DELETE_WINDOW", self.on_close)

        self.chat_box = scrolledtext.ScrolledText(master, state=tk.DISABLED)
        self.chat_box.pack(padx=10, pady=10)

        self.message_box = tk.Entry(master, width=50)
        self.message_box.pack(padx=10, pady=10)
        self.message_box.bind("<Return>", lambda event: self.send_message())

        self.send_button = tk.Button(master, text="Send", command=self.send_message)
        self.send_button.pack(pady=10)

        self.choose_nickname()

        self.receive_thread = threading.Thread(target=self.receive_messages)
        self.receive_thread.start()

    def choose_nickname(self):
        nickname_prompt = tk.Tk()
        nickname_prompt.withdraw()
        self.nickname = simpledialog.askstring("Nickname", "Please choose a nickname", parent=nickname_prompt)
        self.client.send(self.nickname.encode('utf-8'))

    def receive_messages(self):
        while True:
            try:
                message = self.client.recv(1024).decode('utf-8')
                self.chat_box.config(state=tk.NORMAL)
                self.chat_box.insert(tk.END, message + '\n')
                self.chat_box.yview(tk.END)
                self.chat_box.config(state=tk.DISABLED)
            except:
                messagebox.showerror("Error", "An error occurred!")
                self.client.close()
                break

    def send_message(self):
        message = f'{self.nickname}: {self.message_box.get()}'
        self.client.send(message.encode('utf-8'))
        self.message_box.delete(0, tk.END)

    def on_close(self):
        self.client.close()
        self.master.destroy()


# Function to run the server and client in parallel
def run_chat_app():
    root = tk.Tk()

    # Starting the server in a separate thread
    server_thread = threading.Thread(target=start_server)
    server_thread.start()

    # Starting the client GUI
    client = ChatClient(root)
    root.mainloop()

def start_server():
    chat_server = ChatServer()
    chat_server.receive()


if __name__ == "__main__":
    run_chat_app()
    import socket
import threading
import tkinter as tk
from tkinter import scrolledtext, simpledialog, messagebox
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Server class to handle client connections and broadcasting messages
class ChatServer:
    def __init__(self, host='127.0.0.1', port=5000):
        self.host = host
        self.port = port
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.bind((self.host, self.port))
        self.server.listen()
        self.clients = []
        self.nicknames = []
        logging.info(f"Server started on {self.host}:{self.port}")

    def broadcast(self, message, _client=None):
        """Broadcasts a message to all clients except the sender."""
        for client in self.clients:
            if client != _client:
                try:
                    client.send(message)
                except Exception as e:
                    logging.error(f"Error sending message: {e}")
                    self.remove_client(client)

    def handle_client(self, client):
        """Handles the communication with a single client."""
        while True:
            try:
                message = client.recv(1024)
                self.broadcast(message, client)
            except Exception as e:
                logging.warning(f"Client disconnected: {e}")
                self.remove_client(client)
                break

    def receive(self):
        """Accepts new client connections and starts a thread for each one."""
        while True:
            try:
                client, address = self.server.accept()
                logging.info(f"Connected with {str(address)}")

                client.send('NICKNAME'.encode('utf-8'))
                nickname = client.recv(1024).decode('utf-8')
                self.nicknames.append(nickname)
                self.clients.append(client)

                logging.info(f"Nickname is {nickname}")
                self.broadcast(f'{nickname} joined the chat!'.encode('utf-8'))
                client.send('Connected to the server!'.encode('utf-8'))

                thread = threading.Thread(target=self.handle_client, args=(client,))
                thread.start()
            except Exception as e:
                logging.error(f"Error accepting clients: {e}")
                break

    def remove_client(self, client):
        """Removes a client from the list and closes the connection."""
        if client in self.clients:
            index = self.clients.index(client)
            self.clients.remove(client)
            client.close()
            nickname = self.nicknames[index]
            self.broadcast(f'{nickname} has left the chat!'.encode('utf-8'))
            self.nicknames.remove(nickname)
            logging.info(f"{nickname} disconnected")

# Client class with GUI to send and receive messages
class ChatClient:
    def __init__(self, master, host='127.0.0.1', port=5000):
        self.master = master
        self.host = host
        self.port = port
        self.client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        try:
            self.client.connect((self.host, self.port))
        except Exception as e:
            messagebox.showerror("Connection Error", f"Failed to connect to server: {e}")
            logging.error(f"Failed to connect to server: {e}")
            return

        self.nickname = None

        self.master.title("Chat Application")
        self.master.protocol("WM_DELETE_WINDOW", self.on_close)

        self.chat_box = scrolledtext.ScrolledText(master, state=tk.DISABLED)
        self.chat_box.pack(padx=10, pady=10)

        self.message_box = tk.Entry(master, width=50)
        self.message_box.pack(padx=10, pady=10)
        self.message_box.bind("<Return>", lambda event: self.send_message())

        self.send_button = tk.Button(master, text="Send", command=self.send_message)
        self.send_button.pack(pady=10)

        self.choose_nickname()

        self.receive_thread = threading.Thread(target=self.receive_messages)
        self.receive_thread.start()

    def choose_nickname(self):
        """Prompts the user to choose a nickname."""
        nickname_prompt = tk.Tk()
        nickname_prompt.withdraw()
        self.nickname = simpledialog.askstring("Nickname", "Please choose a nickname", parent=nickname_prompt)
        self.client.send(self.nickname.encode('utf-8'))

    def receive_messages(self):
        """Receives messages from the server and displays them in the chat box."""
        while True:
            try:
                message = self.client.recv(1024).decode('utf-8')
                self.chat_box.config(state=tk.NORMAL)
                self.chat_box.insert(tk.END, message + '\n')
                self.chat_box.yview(tk.END)
                self.chat_box.config(state=tk.DISABLED)
            except Exception as e:
                messagebox.showerror("Error", f"An error occurred: {e}")
                logging.error(f"Error receiving message: {e}")
                self.client.close()
                break

    def send_message(self):
        """Sends a message to the server."""
        message = f'{self.nickname}: {self.message_box.get()}'
        self.client.send(message.encode('utf-8'))
        self.message_box.delete(0, tk.END)

    def on_close(self):
        """Handles the closing of the application."""
        try:
            self.client.close()
        except Exception as e:
            logging.error(f"Error closing connection: {e}")
        finally:
            self.master.destroy()

# Function to run the server and client in parallel
def run_chat_app():
    root = tk.Tk()

    # Starting the server in a separate thread
    server_thread = threading.Thread(target=start_server)
    server_thread.start()

    # Starting the client GUI
    client = ChatClient(root)
    root.mainloop()

def start_server():
    """Starts the chat server."""
    chat_server = ChatServer()
    chat_server.receive()

if __name__ == "__main__":
    run_chat_app()

