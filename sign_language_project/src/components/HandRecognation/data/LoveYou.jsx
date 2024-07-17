import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const loveYouGesture = new GestureDescription('i_love_you');

loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25)
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25)

loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.25)

loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25)

for(let finger of [Finger.Middle, Finger.Ring]){
    loveYouGesture.addCurl(finger, FingerCurl.NoCurl, .75)
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25)
}   