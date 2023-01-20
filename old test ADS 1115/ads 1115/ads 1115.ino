#include <Adafruit_ADS1X15.h>
#include <WiFi.h>

const char* ssid = "HMS802"; // Wi-Fi SSID
const char* password = "abcabc231"; // Wi-Fi Password


Adafruit_ADS1115 ads;  /* Use this for the 16-bit version */

void setup(void)
{
  Serial.begin(115200);
    // 初始化串口

  // 连接WIFI
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  // 获取路由器分配的IP地址

  if (!ads.begin()) {
    //Serial.println("Failed to initialize ADS.");
    while (1);
  }
}
//实验性，利用电压差
void loop(void)
{
  int16_t adc1, adc2, adc3;
  float volts1, volts2, volts3;

  adc1 = ads.readADC_SingleEnded(1);
  adc2 = ads.readADC_SingleEnded(2);
  adc3 = ads.readADC_SingleEnded(3);

  volts1 = ads.computeVolts(adc1);
  volts2 = ads.computeVolts(adc2);
  volts3 = ads.computeVolts(adc3);

  Serial.println("  ");
  Serial.print("X:"); Serial.print(" "); Serial.print(volts1); Serial.print(" | ");
  Serial.print("Y:"); Serial.print(" "); Serial.print(volts2); Serial.print(" | ");
  Serial.print("Z:"); Serial.print(" "); Serial.print(volts3); Serial.print(" | ");

  delay(10);
}

