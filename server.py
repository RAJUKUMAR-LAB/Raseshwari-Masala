import http.server
import socketserver
import os

PORT = 8888
DIRECTORY = r"C:\rajeshwarimasala"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving Raseshwari Spices on http://localhost:{PORT}")
        httpd.serve_forever()