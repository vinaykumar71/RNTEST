package com.rntest;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.content.Context;
public class ToastModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  ToastModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

   @Override
  public String getName() {
    return "CheckInternet";
  }

   @ReactMethod
  public void show(String message,Callback errorCallback,Callback successCallback) {
    try {
        ConnectivityManager cm = (ConnectivityManager) getReactApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);

        Boolean status = cm.getActiveNetworkInfo() != null && cm.getActiveNetworkInfo().isConnected();



        successCallback.invoke("Hello vinay"+status);
      } catch (Exception ex) {
        errorCallback.invoke(ex.getMessage());
      }

    // Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}