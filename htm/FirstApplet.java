package htm;
import java.applet.*;
import java.awt.*;
public class FirstApplet extends Applet {
    public void paint(Graphics g) {
        Font font = new Font("Arial", Font.BOLD, 24);
        g.setFont(font);
        g.drawString("Hello, World!", 20, 30);
        g.drawString("This is the first applet.", 20, 50);
    }
}