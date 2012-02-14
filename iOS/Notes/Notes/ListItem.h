//
//  ListItem.h
//  Notes
//
//  Created by Ryan Ashcraft on 2/14/12.
//  Copyright (c) 2012 TS Software. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreData/CoreData.h>

@class Outline;

@interface ListItem : NSManagedObject

@property (nonatomic, retain) NSString * content;
@property (nonatomic, retain) NSNumber * indent;
@property (nonatomic, retain) NSNumber * index;
@property (nonatomic, retain) Outline *parent;

@end
